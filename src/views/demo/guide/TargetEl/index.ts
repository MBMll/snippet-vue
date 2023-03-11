import { VNode, withDirectives } from 'vue'
import { on, off } from 'evtd'

export const defineDirective = (callback: (el: HTMLElement) => void) => {
    let callback_ = callback as () => void
    const setTargetEl = (el: HTMLElement) => {
        console.log('setTargetEl', el.getClientRects()[0])
        callback(el)
        callback_ = () => {
            console.log('transitionend on', el)
            callback(el)
        }
        new MutationObserver(callback_).observe(el, { attributes: true })
        on('transitionend', el, callback_, true)
    }
    const clearTargetEl = (el: HTMLElement) => {
        callback(el)
        if (callback_ !== callback) {
            off('transitionend', el, callback_, true)
        }
    }

    return {
        updated: setTargetEl,
        mounted: setTargetEl,
        unmounted: clearTargetEl
    }
}

// export default vTargetEl

export const useTargetEl = () => {
    const targetElRef = ref<HTMLElement | null>(null)
    const vTargetEl = defineDirective((el: HTMLElement | null) => {
        targetElRef.value = el
    })
    return {
        targetElRef,
        withTargetElDirectives: (el: VNode) => withDirectives(el, [[vTargetEl]])
    }
}
