<template>
  <section>
    <div v-if="product" class="section-center ">
      <div>
        <h1 class="text-4xl">Product Details </h1>
        <ProductDetails :product="product" />
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
const { id } = useRoute().params;
const url = 'https://api.escuelajs.co/api/v1/products/' + id;

const { data: product } = await useFetch<IProduct>(url);

if (!product.value) {
  throw createError({ statusCode: 404, message: 'product not found', fatal: true })
}
</script>

<style></style>