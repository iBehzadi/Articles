<template>
  <div
    class="border bg-white rounded-md w-full shadow-md flex flex-col justify-between items-center p-3 h-72 transition-all duration-500 hover:shadow-dark hover:scale-[1.02]">
    <img :src="product.images" class="w-40" alt="">
    <span>{{ product.title }}</span>
    <NuxtLink class="btn w-[90%] cursor-pointer text-lime-200 bg-blue-500" :to="`/products/${product.id}`"> View Details </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { product } = defineProps<{ product: IProduct }>()
</script>

<style></style>