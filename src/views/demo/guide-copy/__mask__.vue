<template>
    <Teleport to="body">
        <div
            v-show="showRef"
            class="mask-wrapper"
            :style="{
                '--target-left': `${target.left}px`,
                '--target-right': `${target.right}px`,
                '--target-top': `${target.top}px`,
                '--target-bottom': `${target.bottom}px`,
                '--target-width': `${target.width}px`,
                '--target-height': `${target.height}px`,
                '--target-z-index': target.zIndex
            }"
        >
            <div class="mask" @click="updateShow?.(false)"></div>
            <div class="target" @click="updateShow?.(false)">
                <slot name="target" />
            </div>
            <div class="body">
                <slot />
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts" setup>
    import { defineGuideInject } from './composable/provide-inject/Guide'

    const { target, show: showRef, updateShow } = defineGuideInject()
</script>

<style lang="scss" scoped>
    .mask-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 0;
        pointer-events: none;
        z-index: var(--target-z-index);

        .mask {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            overflow: visible;
            z-index: calc(var(--target-z-index) + 1);
        }
        .target {
            position: absolute;
            left: var(--target-left);
            right: var(--target-right);
            top: var(--target-top);
            bottom: var(--target-bottom);
            width: var(--target-width);
            height: var(--target-height);
            overflow: visible;
            z-index: calc(var(--target-z-index) + 2);
            box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.4);
        }
    }
</style>
