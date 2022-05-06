<template>
    <n-layout>
        <n-layout-header></n-layout-header>
        <n-layout has-sider>
            <n-layout-sider
                content-style="padding: 24px;"
                style="margin-right: 32px"
                :native-scrollbar="false"
                show-trigger="bar"
                collapse-mode="transform"
                :collapsed-width="120"
            >
                <n-scrollbar>
                    <n-menu :value="activeMenu" :options="routes"></n-menu>
                </n-scrollbar>
            </n-layout-sider>
            <n-layout-content>
                <alive-router-view></alive-router-view>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script lang="ts">
    export default {
        name: 'Docs'
    }
</script>

<script lang="ts" setup>
    import router from '@/router'
    import { RouterLink } from 'vue-router'

    const route = useRoute()
    const activeMenu:any = computed(() => toRaw(route.name))
    const routes:any = router.options.routes
    const deepRender = (routes: Array<any>) => {
        routes.forEach((r: any) => {
            r.label = () => h(RouterLink, { to: { name: r.name } }, () => r.name)
            if (r?.children) {
                deepRender(r.children)
            }
        })
    }
    deepRender(routes)
</script>
