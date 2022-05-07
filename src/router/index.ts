import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
// import routes from 'virtual:generated-pages'

routes.push({
  path: '/:pathMatch(.*)',
  name: 'path-match',
  // redirect: '/404'
  component: () => import('@/views/404/index.vue')
})
console.log(routes)
const router = createRouter({ history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH), routes })

export default router
