import { VNode, withDirectives } from 'vue'

const setTargetEl = (el: HTMLElement, binding: { value: (el: any) => void }) => {
    console.log('setTargetEl', el.getClientRects()[0])
    binding.value?.(el)
}
const vTargetEl = {
    updated: setTargetEl,
    mounted: setTargetEl
}

export default vTargetEl

export const useTargetEl = () => {
    const targetElRef = ref<HTMLElement | null>(null)
    const updateTargetEl = (el: HTMLElement | null) => {
        targetElRef.value = el
    }
    return {
        targetElRef,
        withTargetElDirectives: (el: VNode) => withDirectives(el, [[vTargetEl, updateTargetEl]])
    }
}
