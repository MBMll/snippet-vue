<template>
  <router-view v-slot="{Component}">
    <keep-alive :max="9">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script lang="ts" >
export default {
  name: 'AliveRouterVie'
}
</script>
