<template>
    <Mask>
        <template #target>
            <slot name="target"></slot>
        </template>
        <n-card class="dialog" @click.stop.prevent="() => {}">
            <slot></slot>
        </n-card>
    </Mask>
</template>

<script lang="ts" setup>
    import Mask from './__mask__.vue'
</script>

<style lang="scss" scoped>
    .n-card.dialog {
        //position: absolute;
        width: 500px;
        height: 500px;
        flex-direction: column;
        align-self: center;
        justify-self: center;
        margin: auto;
        border-radius: 30px;
    }
</style>
