<script lang="ts">
    import { Dismiss16Filled } from '@vicons/fluent'
    import { onMounted, ref, withDirectives, h, inject } from 'vue'
    import type { VNode } from 'vue'
    import { getFirstSlotVNode } from 'naive-ui/es/_utils'
    import { NButton, NCard, NIcon, NPopover, NSpace } from 'naive-ui'
    import { VBinder, VTarget, VFollower } from 'vueuc'
    import { defineVModelShow } from '@/composable/v-model/show'

    export default {
        name: 'GuidePopover',
        render() {
            const targetVNode = getFirstSlotVNode(this.$slots, 'target')
            const showVModel = {
                show: this.showRef,
                'onUpdate:show': (v) => {
                    this.showRef = v
                }
            }
            const { x, y, width, height } = this.vbinder.targetRef?.getBoundingClientRect() ?? {}
            console.log(this)
            return h(VBinder, null, () => [
                h(
                    VTarget,
                    null,
                    // {
                    // ref: 'targetRef'
                    // },
                    { default: () => targetVNode }
                ),
                h(
                    VFollower,
                    {
                        x,
                        y,
                        overlap: true,
                        width: String(width ?? 100),
                        height: String(height ?? 100),
                        ...showVModel
                    },
                    () => [
                        h('div', { class: 'mask' }),
                        h(
                            NPopover,
                            { show: true, x, y, trigger: 'manual' },
                            {
                                trigger: () => h('div', { class: 'target-overlap' }),
                                default: () =>
                                    h(
                                        NCard,
                                        { class: 'pop-card' },
                                        {
                                            'header-extra': () =>
                                                h(NSpace, null, [
                                                    () =>
                                                        h(
                                                            NButton,
                                                            {
                                                                type: 'primary',
                                                                ghost: true,
                                                                circle: true,
                                                                size: 'small',
                                                                onClick: this.close
                                                            },
                                                            {
                                                                icon: () =>
                                                                    h(NIcon, null, () =>
                                                                        h(Dismiss16Filled)
                                                                    )
                                                            }
                                                        )
                                                ])
                                        }
                                    )
                            }
                        )
                    ]
                )
            ])
        }
    }
</script>

<script lang="ts" setup>
    const props = defineProps({
        show: {
            type: Boolean,
            default: false
        }
    })
    const emit = defineEmits(['update:show'])
    const { showRef } = defineVModelShow(props, emit)

    const targetRef = ref<HTMLElement | null>(null)
    const vbinder = inject<BinderInstance>('VBinder')!
    const close = () => {
        showRef.value = false
    }
    onMounted(() => {
        // setTimeout(() => {
        showRef.value = props.show
        // }, 1000)
    })
</script>

<style lang="scss" scoped>
    .mask {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: transparent;
    }
    .target-overlap {
        box-sizing: content-box;
        box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
    .pop-card {
        background-color: $primaryColor;
    }
</style>
