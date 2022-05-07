<template>
    <n-layout style="height: 100vh">
        <n-layout-header></n-layout-header>
        <n-layout has-sider>
            <n-layout-sider
                content-style="padding: 24px;"
                style="margin-right: 32px"
                :native-scrollbar="false"
                show-trigger="bar"
                collapse-mode="transform"
                :show-collapsed-content="false"
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
    const activeMenu: any = computed(() => toRaw(route.name))
    const hiddenList: Array<string> = ['404', 'path-match']
    const deepRender = (routes: Array<any>) => {
        return routes
            .filter((e: any) => !hiddenList.includes(e.name))
            .map((r: any) =>
                Object.assign({}, r, {
                    label: () =>
                        h(RouterLink, { to: { name: r.name } }, () => r.name || r.path.substr(1)),
                    children: Array.isArray(r?.children) ? deepRender(r.children) : null
                })
            )
    }
    const routes: any = deepRender(router.options.routes)
    console.log(routes)
</script>
