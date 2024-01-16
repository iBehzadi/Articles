<template>
  <div>
    <section>
      <div class="section-center md:grid md:grid-cols-2 gap-x-5 lg:grid-cols-3">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Nuxt | Our Articles',
  meta: [
    { name: 'description', content: 'list of our articles' }
  ]
})

 </script>

<style>
</style>