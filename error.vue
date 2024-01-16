<template>
  <div class="mt-20 max-w-sm mx-auto text-center ">
    <p class="mt-7 text-7xl font-bold">{{ error?.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7 f">{{ error?.message }}</p>
    <button class="btn" @click="handleError">Back to Home</button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  error: Object,
});
const handleError = () => clearError({ redirect: '/' });
</script>

<style>

</style>