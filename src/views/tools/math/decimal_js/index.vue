<template>
    <n-form>
        <n-form-item>
            <n-input-number v-model:value="formReact.first"></n-input-number>
        </n-form-item>
        <n-form-item>
            <n-input-number v-model:value="formReact.second"></n-input-number>
        </n-form-item>
    </n-form>
    <n-list>
        <n-list-item
            >{{ add(formReact.first, formReact.second) }}
            {{ formReact.first + formReact.second }}</n-list-item
        >
        <n-list-item
            >{{ sub(formReact.first, formReact.second) }}
            {{ formReact.first - formReact.second }}</n-list-item
        >
        <n-list-item
            >{{ mul(formReact.first, formReact.second) }}
            {{ formReact.first * formReact.second }}</n-list-item
        >
        <n-list-item
            >{{ div(formReact.first, formReact.second) }}
            {{ formReact.first / formReact.second }}</n-list-item
        >
    </n-list>
</template>

<script lang="ts">
    export default {
        name: 'DecimalJsDemo'
    }
</script>

<script lang="ts" setup>
    import { reactive } from 'vue'
    // import Decimal from 'decimal.js'
    import { add,sub,mul,div} from '@/utils/decimal'
    const formReact: any = reactive({ first: 0.3, second: 0.2 })
    // const add = (first, second) => Decimal.add(first, second)
    // const sub = (first, second) => Decimal.sub(first, second)
    // const mul = (first, second) => Decimal.mul(first, second)
    // const div = (first, second) => Decimal.div(first, second)
</script>
