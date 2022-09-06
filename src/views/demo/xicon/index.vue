<template>
    <n-input v-model:value="formReact.qs"></n-input>
    <n-grid>
        <n-gi v-for="icon in iconsRef" :key="icon" :span="3">
            <n-card>
                <template #cover>
                    <n-icon size="150">
                        <component :is="all[icon]"></component>
                    </n-icon>
                </template>
                <n-text>{{ icon }}</n-text>
            </n-card>
        </n-gi>
    </n-grid>
</template>

<script lang="ts" setup>
    import { reactive, watch } from 'vue'
    import { debounce } from 'lodash'
    import * as all from '@vicons/fluent'
    // console.log(all)
    const formReact = reactive({ qs: '' })
    const iconsRef = ref<Array<any>>([])
    // computed(() => )
    watch(
        [() => formReact.qs],
        debounce(() => {
            // console.log(all)
            // icons = Object.keys(all).filter(s=>s.includes(formReact.qs))
            iconsRef.value = Object.keys(all).filter((s) =>
                s.toLocaleLowerCase().includes(formReact.qs.toLocaleLowerCase())
            )
        }, 500),
        { immediate: true }
    )
</script>
