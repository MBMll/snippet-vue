<template>
    <n-layout style="height: 100vh">
        <n-layout-header></n-layout-header>
        <n-layout has-sider>
            <n-layout-sider
                v-model:collapsed="collapsedRef"
                content-style="padding: 24px;"
                style="margin-right: 32px"
                :native-scrollbar="false"
                show-trigger="bar"
                collapse-mode="transform"
                :show-collapsed-content="false"
                :collapsed-width="120"
            >
                <n-scrollbar>
                    <n-menu
                        :value="activeMenu"
                        :collapsed="collapsedRef"
                        :options="routes"
                        style="width: 100%"
                    />
                </n-scrollbar>
            </n-layout-sider>
            <n-layout-content
                style="padding: 30px; width: 100%; height: 100vh; background: #efefef"
                :native-scrollbar="false"
            >
                <n-card
                    hoverable
                    embedded
                    :bordered="false"
                    content-style="margin: 30px;"
                    style="border-radius: 30px"
                >
                    <alive-router-view></alive-router-view>
                </n-card>
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
    // import 'markdown-it-latex/dist/index.css'
    import router from '@/router'
    import { RouterLink } from 'vue-router'

    const collapsedRef = ref(false)
    const route = useRoute()
    const activeMenu: any = computed(() => toRaw(route.name))
    const hiddenList: Array<string> = ['404', 'path-match']
    const deepRender = (routes: Array<any>): Array<any> => {
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

<style lang="scss" scoped>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.0/katex.min.css');
    // @import url('https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css');

    ::v-deep(.katex-display > .katex) {
        white-space: break-spaces;
    }
    ::v-deep(a) {
        color: #0969da;
        &:hover {
            text-decoration: underline;
        }
    }
</style>
