import { Ref, provide, InjectionKey } from 'vue'

const key = Symbol() as InjectionKey<{
    target: Ref<HTMLElement | null>
    show: Ref<boolean>
    updateShow: (v: boolean) => void
}>

export const defineGuideInject = () => {
    const { target, show, updateShow } = inject(key) ?? {}
    return {
        target: computed(() => {
            console.log(target?.value, target?.value?.getClientRects()[0], show?.value)
            const { bottom, height, left, right, top, width, x, y } =
                target?.value?.getClientRects()[0] ?? {}
            return {
                bottom,
                height,
                left,
                right,
                top,
                width,
                x,
                y,
                zIndex: target?.value && window.getComputedStyle(target?.value)?.zIndex
            }
        }),
        show,
        updateShow
    }
}

export const defineGuideProvide = (args: {
    show: Ref<boolean>
    target: Ref<HTMLElement | null>
}) => {
    const { show, target } = args
    provide(key, {
        target,
        show,
        updateShow: (v: boolean) => {
            show.value = v
        }
    })
    onUpdated(() => {
        target.value = target.value
    })
}
