<template>
    <n-list>
        <template v-if="Array.isArray(docsRoutes)">
            <n-list-item v-for="r in docsRoutes">
                <router-link :to="{ path: r.path }">
                    <n-a>
                        <n-icon v-if="router.currentRoute.value.path === r.path">
                            <IosArrowRtl24Filled />
                        </n-icon>
                        {{ r.name }}
                    </n-a>
                </router-link>
            </n-list-item>
        </template>
    </n-list>
</template>
<script lang="ts" setup>
    
    import { IosArrowRtl24Filled } from '@vicons/fluent'
    const router = useRouter()
    const route = useRoute()
    const docsRoutes = router
        .getRoutes()
        .filter((e: any) => (e.path === '/docs' ? e.name : e.path.startsWith('/docs')))
        .sort((pre: any, next: any) => (pre.path >= next.path ? 1 : -1))
    console.log(docsRoutes)
</script>
