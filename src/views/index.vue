<template>
    <n-layout style="height: 100vh">
        <n-layout-header>
            <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions"></n-menu>
        </n-layout-header>
        <alive-router-view></alive-router-view>
    </n-layout>
</template>

<script lang="ts" setup>
    import { Component } from 'vue'
    import { RouterLink } from 'vue-router'
    import { NIcon, MenuOption } from 'naive-ui'
    import { Book24Filled, Toolbox24Filled } from '@vicons/fluent'

    const activeKey = ref<string | null>(null)
    const renderIcon = (icon: Component) => () => h(NIcon, null, { default: () => h(icon) })
    const menuOptions: MenuOption[] = [
        {
            label: () => h(RouterLink, { to: { path: '/books' } }, 'books'),
            key: 'books',
            icon: renderIcon(Book24Filled)
        },
        {
            label: () => h(RouterLink, { to: { path: '/tools' } }, 'tools'),
            key: 'tools',
            icon: renderIcon(Toolbox24Filled)
        },
        {
            label: () => h(RouterLink, { to: { path: '/demo' } }, 'demo'),
            key: 'demo',
            icon: renderIcon(Toolbox24Filled)
        }
    ]
</script>
