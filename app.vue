<script setup lang="ts">
useHead({
  title: 'iBehzadi | Articles',
  meta: [
    { name: 'description', content: 'My first web site made with nuxt3' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <div dir="rtl" class="bg-slate-100">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style >
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}



.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>