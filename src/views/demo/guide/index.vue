<template>
    <n-dropdown
        trigger="click"
        :options="optionsRef"
        show-arrow
        :show="showRef"
        placement="right"
        @update:show="handleShowUserOption"
    >
        <n-button> xxxxx</n-button>
    </n-dropdown>
    <GuideDialog>
        <!-- <template #target></template>     -->
        <article>
            <header>xxx</header>
            <p></p>
            <n-button @click.stop="() => {}">xxx</n-button>
        </article>
    </GuideDialog>
    <!-- <n-modal v-model:show="showRef" preset="card" style="width: 500px; height: 500px">
        dssd
    </n-modal> -->
</template>

<script lang="ts" setup>
    import { useI18n } from 'vue-i18n'
    import { useTargetEl } from './TargetEl'
    import { defineGuideProvide } from './composable/provide-inject/Guide'
    import { useVModelShow } from '@/composable/v-model/show'
    // import GuideDialog from './__Dialog__.vue'
    import GuideDialog from './__Popover__.vue'

    const { locale, t } = useI18n()
    const { targetElRef, withTargetElDirectives } = useTargetEl()
    const { showRef } = useVModelShow()
    const optionsRef = ref([
        {
            key: 'lang',
            label: ''
        },
        {
            key: 'settings',
            label: t('user.selfSetting')
        },
        {
            key: 'userSettings',
            label: () =>
                withTargetElDirectives(
                    h('span', { style: 'display:inline-block;' }, t('menus.userInfo.name'))
                )
            // h(
            //     GuidePopover,
            //     {
            //         show: showUserOptionRef.value,
            //         'onUpdate:show': (v) => {
            //             showUserOptionRef.value = v
            //         }
            //     },
            //     { target: () => t('menus.userInfo.name'), default: () => '' }
            // )
        },
        {
            key: 'logout',
            label: t('user.logout')
        }
    ])
    const showUserOptionRef = ref(false)
    watch([showUserOptionRef], (arr) => {
        const [show] = arr
        if (!show) {
            showRef.value = false
        }
    })
    const handleShowUserOption = (v: boolean) => {
        console.log('handleShowUserOption', v)
        if (v === true) {
            showRef.value = true
            nextTick(() => {
                // showUserOptionRef.value = v
                // setTimeout(() => {
                showUserOptionRef.value = v
                // }, 250)
            })
        }
    }
    defineGuideProvide({ show: showUserOptionRef, target: targetElRef })
</script>
