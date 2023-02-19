import { ref, watch } from 'vue'

export const PROP_TYPES = {
    show: {
        type: Boolean,
        default: false
    }
}

export const EMITS = ['update:show']

export const defineVModelShow = (props, emit) => {
    const showRef = ref(false)

    watch([() => props.show], (arr) => {
        const [show] = arr
        showRef.value = Boolean(show)
    })

    watch([showRef], (v) => {
        const [show] = v
        console.log(show)
        if (show !== props.show) {
            emit('update:show', show)
        }
    })

    return { showRef }
}

export const useVModelShow = () => {
    const showRef = ref(false)
    return {
        showRef,
        open: () => {
            showRef.value = true
        }
    }
}
