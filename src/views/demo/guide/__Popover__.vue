<template>
    <Mask>
        <template #target>
            <slot name="target"></slot>
        </template>
        <!-- <n-popover :show="showRef" :x="target.x" :y="target.y" trigger="manual"> -->
        <div class="popover-body-wrapper" :class="props.placement">
            <n-card class="popover-body" @click.stop.prevent="() => {}">
                <slot></slot>
            </n-card>
            <div class="arrow-wrapper">
                <div class="arrow"></div>
            </div>
        </div>
        <!-- </n-popover> -->
    </Mask>
</template>
<script lang="ts">
    export default {
        name: 'GuidePopover'
        // render() {
        //     const targetVNode = getFirstSlotVNode(this.$slots, 'target')
        //     const showVModel = {
        //         show: this.showRef,
        //         'onUpdate:show': (v) => {
        //             this.showRef = v
        //         }
        //     }
        //     const { x, y, width, height } = this.vbinder.targetRef?.getBoundingClientRect() ?? {}
        //     console.log(this)
        //     return h(VBinder, null, () => [
        //         h(
        //             VTarget,
        //             null,
        //             // {
        //             // ref: 'targetRef'
        //             // },
        //             { default: () => targetVNode }
        //         ),
        //         h(
        //             VFollower,
        //             {
        //                 x,
        //                 y,
        //                 overlap: true,
        //                 width: String(width ?? 100),
        //                 height: String(height ?? 100),
        //                 ...showVModel
        //             },
        //             () => [
        //                 h('div', { class: 'mask' }),
        //                 h(
        //                     NPopover,
        //                     { show: true, x, y, trigger: 'manual' },
        //                     {
        //                         trigger: () => h('div', { class: 'target-overlap' }),
        //                         default: () =>
        //                             h(
        //                                 NCard,
        //                                 { class: 'pop-card' },
        //                                 {
        //                                     'header-extra': () =>
        //                                         h(NSpace, null, [
        //                                             () =>
        //                                                 h(
        //                                                     NButton,
        //                                                     {
        //                                                         type: 'primary',
        //                                                         ghost: true,
        //                                                         circle: true,
        //                                                         size: 'small',
        //                                                         onClick: this.close
        //                                                     },
        //                                                     {
        //                                                         icon: () =>
        //                                                             h(NIcon, null, () =>
        //                                                                 h(Dismiss16Filled)
        //                                                             )
        //                                                     }
        //                                                 )
        //                                         ])
        //                                 }
        //                             )
        //                     }
        //                 )
        //             ]
        //         )
        //     ])
        // }
    }
</script>

<script lang="ts" setup>
    import { Dismiss16Filled } from '@vicons/fluent'
    import { onMounted, ref, withDirectives, h, inject, PropType } from 'vue'
    import type { VNode } from 'vue'
    import { getFirstSlotVNode } from 'naive-ui/es/_utils'
    import { NButton, NCard, NIcon, NPopover, NSpace } from 'naive-ui'
    import { VBinder, VTarget, VFollower } from 'vueuc'
    import { defineVModelShow } from '@/composable/v-model/show'
    import Mask from './__mask__.vue'
    import { defineGuideInject } from './composable/provide-inject/Guide'

    const { target, show: showRef, updateShow } = defineGuideInject()

    const props = defineProps({
        show: {
            type: Boolean,
            default: false
        },
        placement: {
            type: String as PropType<'center' | 'left' | 'right' | 'top' | 'bottom'>,
            default: 'left'
        }
    })
    // const emit = defineEmits(['update:show'])
    // const { showRef } = defineVModelShow(props, emit)

    const targetRef = ref<HTMLElement | null>(null)
    const vbinder = inject<BinderInstance>('VBinder')!
    const close = () => {
        showRef.value = false
    }
    onMounted(() => {
        // setTimeout(() => {
        // showRef.value = props.show
        // }, 1000)
    })
</script>

<style lang="scss" scoped>
    .popover-body-wrapper {
        --space-arrow: 10px;
        width: 300px;
        height: 300px;
        position: absolute;
        transform: translate(var(--target-x), var(--target-y)) translateX(50%) translateY(0%);
        overflow: hidden;
        pointer-events: none;
        .popover-body {
            width: 100%;
            height: 100%;
            pointer-events: all;
        }
        .arrow-wrapper {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            //width: 0;
            .arrow {
                position: absolute;
                display: block;
                width: calc(var(--space-arrow));
                height: calc(var(--space-arrow));
                background-color: #fff;
            }
        }
        &.left {
            .popover-body {
                width: calc(100% - var(--space-arrow));
                margin-left: var(--space-arrow);
            }
            .arrow-wrapper {
                left: auto;
                right: calc(100% - var(--space-arrow));
                width: var(--space-arrow);
                .arrow {
                    right: calc(var(--space-arrow) / -2);
                    transform: translateY(calc(var(--space-arrow) / -2)) rotate(45deg);
                    // top: 50%;
                    top: calc(var(--target-height) / 2);
                }
            }
        }
    }
    .popover-body-wrapper::after {
        content: '';
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        transform: translate(var(--target-x), var(--target-y)) translateX(50%) translateY(0%);
    }
</style>
