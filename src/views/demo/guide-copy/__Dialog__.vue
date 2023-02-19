<template>
    <Mask>
        <template #target>
            <slot name="target"></slot>
        </template>
        <n-card>
            <slot></slot>
        </n-card>
    </Mask>
</template>

<script lang="ts" setup>
    import Mask from './__mask__.vue'
</script>
