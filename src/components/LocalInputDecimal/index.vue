<template>
    <div class="n-input-number">
        <n-input
            ref="inputInstRef"
            v-bind="bindAttr"
            :text-decoration="displayedValueInvalidRef"
            :value="displayedValueRef"
            @update:value="handleUpdateDisplayedValue"
            @blur="doBlur"
        >
            <template v-for="(_, name) in $slots" #[name]>
                <slot :name="name"></slot>
            </template>
        </n-input>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'LocalInputDecimal'
    }
</script>
<script lang="ts" setup>
    import { reactive, ref, toRef, watch, onMounted, defineProps, defineEmits } from 'vue'
    import { upperFirst } from 'lodash'
    import { Decimal } from 'decimal.js'
    import { useMemo, useMergedState } from 'vooks'
    import {
        parse as parseToDecimal,
        format as formatToDecimal,
        eq as eqDecimal,
        isDecimal
    } from '@/utils/decimal'

    const inputInstRef = ref(null)

    const props = defineProps({
        autofocus: Boolean,
        loading: {
            type: Boolean,
            default: undefined
        },
        placeholder: String,
        defaultValue: {
            type: String,
            default: null
        },
        value: String,
        min: String,
        max: String,
        size: String,
        disabled: {
            type: Boolean,
            default: undefined
        },
        validator: Function,
        bordered: {
            type: Boolean,
            default: undefined
        },
        showButton: {
            type: Boolean,
            default: true
        },
        buttonPlacement: {
            type: String,
            default: 'right'
        },
        readonly: Boolean,
        clearable: Boolean,
        keyboard: {
            type: Object,
            default: {}
        },
        updateValueOnInput: {
            type: Boolean,
            default: true
        },
        status: String,
        'onUpdate:value': [Function, Array],
        onUpdateValue: [Function, Array],
        onFocus: [Function, Array],
        onBlur: [Function, Array],
        onClear: [Function, Array]
    })
    const isWipValue = (value) => {
        return value.includes('.') && (/^(-)?\d+.*(\.|0)$/.test(value) || /^\.\d+$/.test(value))
    }
    const validator = (value) => {
        if (value === undefined || value === null) return true
        if (isNaN(value)) {
            return false
        }
        return true
    }
    const call = (funcs, ...args) => {
        if (Array.isArray(funcs)) {
            funcs.forEach((func) => call(func, ...args))
        } else funcs(...args)
    }
    const mergedMinRef = useMemo(() => formatToDecimal(props.min))
    const mergedMaxRef = useMemo(() => formatToDecimal(props.max))
    // value
    const uncontrolledValueRef = ref(props.defaultValue)
    const controlledValueRef = toRef(props, 'value')
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef)
    const displayedValueRef = ref('')

    const deriveDisplayedValueFromValue = () => {
        const { value } = mergedValueRef
        displayedValueRef.value =
            value === undefined || value === null || isNaN(value) ? value : formatToDecimal(value)
    }
    deriveDisplayedValueFromValue()

    watch(mergedValueRef, () => {
        deriveDisplayedValueFromValue()
    })

    const doUpdateValue = (value) => {
        const { value: mergedValue } = mergedValueRef
        console.log(value, mergedValue, eqDecimal(value, mergedValue))
        if (eqDecimal(value, mergedValue)) {
            deriveDisplayedValueFromValue()
            return
        }
        const { 'onUpdate:value': _onUpdateValue, onUpdateValue, onChange } = props
        if (onChange) call(onChange, value)
        if (onUpdateValue) call(onUpdateValue, value)
        if (_onUpdateValue) call(_onUpdateValue, value)
        uncontrolledValueRef.value = value
    }
    const deriveValueFromDisplayedValue = ({
        offset,
        doUpdateIfValid,
        fixPrecision,
        isInputing
    }) => {
        // console.log(offset, doUpdateIfValid, fixPrecision, isInputing)
        const { value: displayedValue } = displayedValueRef
        if (isInputing && isWipValue(displayedValue)) {
            return false
        }
        const parsedValue = parseToDecimal(displayedValue)
        // console.log(parsedValue)
        if (parsedValue === null) {
            if (doUpdateIfValid) doUpdateValue(null)
            return null
        }
        if (validator(parsedValue)) {
            // if (!fixPrecision) {
            //     return false
            // }
            let nextValue =
                offset === 0 ? parsedValue : Decimal.add(parsedValue || 0, offset || 0).toFixed()
            // console.log(parsedValue, nextValue)
            if (validator(nextValue)) {
                const { value: mergedMax } = mergedMaxRef
                const { value: mergedMin } = mergedMinRef
                // console.log(parsedValue, nextValue, mergedMax, mergedMin)
                if (
                    isDecimal(nextValue) &&
                    isDecimal(mergedMax) &&
                    Decimal.sub(nextValue, parseToDecimal(mergedMax)) > 0
                ) {
                    if (!doUpdateIfValid || isInputing) return false
                    nextValue = parseToDecimal(mergedMax)
                }
                if (
                    isDecimal(nextValue) &&
                    isDecimal(mergedMin) &&
                    Decimal.sub(nextValue, parseToDecimal(mergedMin)) < 0
                ) {
                    if (!doUpdateIfValid || isInputing) return false
                    nextValue = parseToDecimal(mergedMin)
                }
                if (doUpdateIfValid) doUpdateValue(nextValue)
                return nextValue
            }
        }
        return false
    }

    const displayedValueInvalidRef = useMemo(() => {
        // console.log('displayedValueInvalidRef', mergedValueRef.value, displayedValueRef.value)
        const x = deriveValueFromDisplayedValue({
            offset: 0,
            doUpdateIfValid: false,
            isInputing: false,
            fixPrecision: false
        })
        if (!((x ?? true) || x === '' || x === '-' || x)) return 'line-through'
    })
    const handleUpdateDisplayedValue = (value) => {
        displayedValueRef.value = value
        if (
            props.updateValueOnInput &&
            !props.format &&
            !props.parse &&
            props.precision === undefined
        ) {
            deriveValueFromDisplayedValue({
                offset: 0,
                doUpdateIfValid: true,
                isInputing: true,
                fixPrecision: false
            })

            // console.log('handleUpdateDisplayedValue', mergedValueRef.value, displayedValueRef.value)
        }
    }

    const doBlur = (e) => {
        var _a, _b
        if (
            e.target ===
            ((_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef)
        ) {
            // hit input wrapper
            // which means not activated
            return
        }
        const value = deriveValueFromDisplayedValue({
            offset: 0,
            doUpdateIfValid: true,
            isInputing: false,
            fixPrecision: true
        })
        // If valid, update event has been emitted
        // make sure e.target.value is correct in blur callback
        if (value) {
            const inputElRef =
                (_b = inputInstRef.value) === null || _b === void 0 ? void 0 : _b.inputElRef
            if (inputElRef) {
                inputElRef.value = String(value || '')
            }
            // If value is not changed, the displayed value may be greater than or
            // less than the current value. The derived value is reformatted so the
            // value is not changed. We can simply derive a new displayed value
            if (mergedValueRef.value === value) {
                deriveDisplayedValueFromValue()
            }
        } else {
            // If not valid, nothing will be emitted, so derive displayed value from
            // origin value
            deriveDisplayedValueFromValue()
        }
        const { onBlur } = props
        if (onBlur) call(onBlur, e)
    }
    const bindAttr = reactive({})
    onMounted(() => {
        const { autofocus, loading, placeholder, size, disabled, readonly, clearable, status } =
            props
        Object.assign(bindAttr, {
            autofocus,
            loading,
            placeholder,
            size,
            disabled,
            readonly,
            clearable,
            status
        })
    })
</script>

<style scoped lang="scss"></style>
