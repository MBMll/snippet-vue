import { createI18n } from 'vue-i18n'
import { zhCN as defaultLocale, dateZhCN } from 'naive-ui'
import zhCN from '@/locale/zhCN'

export default createI18n({
    legacy: false,
    globalInjection: true,
    locale: localStorage.getItem('lang') || defaultLocale.name,
    messages: {
        'zh-CN': zhCN
    }
})
