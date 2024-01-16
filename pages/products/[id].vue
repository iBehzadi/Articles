<template>
  <section>
    <div>

      <head>
        <Title>Nuxt | {{ product?.title }}</Title>
        <Meta name="description" :content="product?.description">
        </Meta>
      </head>
    </div>
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
const url = 'https://fakestoreapi.com/products/' + id;

const { data: product } = await useFetch<IProduct>(url);

if (!product.value) {
  throw createError({ statusCode: 404, message: 'product not found', fatal: true })
}
</script>

<style></style>