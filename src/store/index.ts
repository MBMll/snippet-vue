import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref({ name: null, id: null, email: null, role: null })
    const isLoggedIn = computed(() => !!user.value.id)
    return { user, isLoggedIn }
})
