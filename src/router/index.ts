import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { path: '/', component: () => import('@/components/HelloWorld.vue') },
  {
    path: '/config/initProject',
    component: () => import('@/views/config/initProject.md')
  }
]

const router = createRouter({ history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH), routes })

export default router
