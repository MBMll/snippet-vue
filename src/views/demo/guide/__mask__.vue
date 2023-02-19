<template>
    <Teleport to="body">
        <div
            v-show="showRef"
            v-z-indexable="{ enable: true, zIndex: 3000 }"
            class="mask-container"
            :style="{
                '--target-left': `${target.left}px`,
                '--target-x': `${target.x}px`,
                '--target-y': `${target.y}px`,
                '--target-right': `${target.right}px`,
                '--target-top': `${target.top}px`,
                '--target-bottom': `${target.bottom}px`,
                '--target-width': `${target.width}px`,
                '--target-height': `${target.height}px`,
                '--target-z-index': 3000
            }"
        >
            <div class="target">
                <slot name="target" />
            </div>
            <div class="mask-wrapper">
                <div class="mask" @click="close" @clickoutside.stop="() => {}">
                    <slot />
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts" setup>
    import { zindexable as vZIndexable } from 'vdirs'
    import { defineGuideInject } from './composable/provide-inject/Guide'

    const { target, show: showRef, updateShow } = defineGuideInject()
    const close = (e: MouseEvent) => {
        console.log('closing', e)
        updateShow?.(false)
        e.preventDefault()
        e.stopPropagation()
    }
</script>

<style lang="scss" scoped>
    .mask-container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 0;
        //pointer-events: none;
        z-index: var(--target-z-index);

        .target {
            position: absolute;
            // left: var(--target-left);
            // right: var(--target-right);
            // top: var(--target-top);
            // bottom: var(--target-bottom);
            transform: translate(var(--target-x), var(--target-y));
            transform-origin: center top;
            width: var(--target-width);
            height: var(--target-height);
            overflow: visible;
            //pointer-events: none;
            //z-index: calc(var(--target-z-index) + 1);
            z-index: auto;
            box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.4);
        }
        .mask-wrapper {
            position: absolute;
            .mask {
                display: flex;
                //flex-direction: column;
                //justify-content: center;
                width: 100vw;
                height: 100vh;
                pointer-events: all;
            }
            overflow: visible;
            //pointer-events: none;
            z-index: auto;
            //z-index: calc(var(--target-z-index) + 2);
        }
        .body {
            position: absolute;
            pointer-events: all;
        }
    }
</style>
