<template>
  <div class="card">
    <div class="grid md:grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.images" alt="" class="mx-auto my-7">
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">{{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
        <p class="mb-7">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { product } = defineProps<{ product: IProduct }>()
</script>

<style></style>