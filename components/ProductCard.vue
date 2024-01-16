<template>
  <div
    class="border bg-white rounded-md w-full shadow-md flex flex-col justify-between items-center p-3 h-72 transition-all duration-500 hover:shadow-dark hover:scale-[1.02]">
    <img :src="product.image" class="w-20 my-auto" alt="">
    <div class="flex flex-col w-full">
      <span>{{ product.title }}</span>
      <NuxtLink class="btn  cursor-pointer text-white bg-blue-500" :to="`/products/${product.id}`"> View Details
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { product } = defineProps<{ product: IProduct }>();
</script>

<style></style>