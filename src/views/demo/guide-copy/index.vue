<template>
    <!-- <n-dropdown trigger="click" :options="optionsRef" @update:show="handleShowUserOption">
        <n-button> xxxxx</n-button>
    </n-dropdown> -->
    <!-- <GuideDialog> -->
    <!-- <template #target></template>     -->
    <!-- <article> -->
    <!-- <header>xxx</header> -->
    <!-- <p></p> -->
    <!-- </article> -->
    <!-- </GuideDialog> -->
    <n-modal :show="true" preset="card" style="width: 500px; height: 500px"> dssd </n-modal>
</template>

<script lang="ts" setup>
    import { useI18n } from 'vue-i18n'
    import { useTargetEl } from './TargetEl'
    import { defineGuideProvide } from './composable/provide-inject/Guide'
    import { NPopover, NDropdown, NButton } from 'naive-ui'
    // import GuideDialog from './__Dialog__.vue'
    import Popover from './__popover__.vue'

    const { locale, t } = useI18n()
    const { targetElRef, withTargetElDirectives } = useTargetEl()
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
                // withTargetElDirectives(
                //     h('span', { style: 'display:inline-block;' }, t('menus.userInfo.name'))
                // )
                h(
                    Popover,
                    {
                        show: showUserOptionRef.value,
                        'onUpdate:show': (v) => {
                            showUserOptionRef.value = v
                        }
                    },
                    { trigger: () => t('menus.userInfo.name'), default: () => 'sss' }
                )
        },
        {
            key: 'logout',
            label: t('user.logout')
        }
    ])
    const showUserOptionRef = ref(false)
    const handleShowUserOption = (v: boolean) => {
        // nextTick(() => {
        //     showUserOptionRef.value = v
        // })
        // setTimeout(() => {
        showUserOptionRef.value = v
        // }, 2000)
    }
    defineGuideProvide({ show: showUserOptionRef, target: targetElRef })
</script>
