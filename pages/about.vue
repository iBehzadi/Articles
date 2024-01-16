<template>
  <div>
    <div class="text-center">
      <h1 class=" p-2  bg-green-400">درباره من</h1>
    </div>
    <section>
      <div class="section-center ">
        <pre dir="ltr" v-if="data">{{ data }}</pre>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'custom',
  middleware: "auth"
})

useHead({
  title: 'Nuxt | About us',
  meta: [
    { name: 'description', content: 'about of ibehzadi dev' }
  ]
})
const { data } = await useFetch('/api/weather/mashhad');
// const { data } = useFetch('/api/sample?name=behzad', {
//   method: 'post',
//   body: { age: 26 }
// })

// const { data } = useFetch('/api/sample')
</script>

<style></style>