<template>
    <Mask>
        <template #target>
            <slot name="target"></slot>
        </template>
    </Mask>
</template>

<script lang="ts" setup>
    import Mask from './__mask__.vue'
</script>
