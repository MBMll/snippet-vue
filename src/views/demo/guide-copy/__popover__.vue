<template>
    <n-popover :show="showRef">
        <template #trigger>
            <slot name="trigger"></slot>
            <!-- <div class="mask-wrapper" @click="close">
                <slot name="trigger" @click="close"></slot>

                <div class="mask" @click="close"> </div>
            </div> -->
        </template>

        <v-binder>
            <v-target>
                <!-- <v-follower :show="true" overlap :to="">
                    <n-card> ddd </n-card>
                </v-follower> -->
            </v-target>
        </v-binder>
    </n-popover>
</template>

<script lang="ts" setup>
    import { Dismiss16Filled } from '@vicons/fluent'
    import { onMounted, ref, withDirectives, h, inject } from 'vue'
    import type { VNode } from 'vue'
    import { getFirstSlotVNode } from 'naive-ui/es/_utils'
    import { NButton, NCard, NIcon, NPopover, NSpace } from 'naive-ui'
    import { VBinder, VTarget, VFollower } from 'vueuc'
    import { defineVModelShow } from '@/composable/v-model/show'

    const props = defineProps({
        show: {
            type: Boolean,
            default: false
        }
    })
    const emit = defineEmits(['update:show'])
    const { showRef } = defineVModelShow(props, emit)
    const close = (e: PointerEvent) => {
        console.log(e)
        e.preventDefault()
        showRef.value = false
    }
</script>

<style lang="scss" scoped>
    .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 0 100vw rgba($color: #000000, $alpha: 0.4);
        // border: 100vw solid rgba($color: #000000, $alpha: 0.4);
        //box-sizing: content-box;
        pointer-events: none;
        overflow: hidden;
        z-index: 9999;
    }
</style>
