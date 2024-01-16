<template>
  <AppHeader />
  <NuxtLoadingIndicator />
  <div>
    <slot />
  </div>
  <AppFooter />
</template>

<script lang="ts" setup>

</script>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>