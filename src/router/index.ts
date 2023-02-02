import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { useUserStore } from '@/store'
// import routes from 'virtual:generated-pages'

routes.push({
    path: '/:pathMatch(.*)',
    name: 'path-match',
    // redirect: '/404'
    component: () => import('@/views/404/index.vue')
})
console.log(routes)
const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
    routes
})

router.beforeEach((to) => {
    const store = useUserStore()
    if (store.isLoggedIn) {
        return '/login'
    }
})

export default router
