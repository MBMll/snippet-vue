import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router'
import i18n from '@/locale'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

import 'prism-theme-vars/base.css'
// instance
const app = createApp(App)

app.use(router)
app.use(i18n)
// pinia
const pinia = createPinia()
app.use(pinia)
// mount
app.mount('#app')
