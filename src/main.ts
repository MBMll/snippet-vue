import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import i18n from '@/locale'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

import 'prism-theme-vars/base.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
