<template>
  <section>
    <div v-if="products" class="section-center grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
declare global {
  interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      count: number,
      rate: number
    }
  }
}
const { data: products } = await useFetch<IProduct[]>('https://fakestoreapi.com/products/');
useHead({
  title: 'Nuxt | Products',
  meta: [
    { name: 'description', content: 'list of our products' }
  ]
})

</script>

<style></style>
