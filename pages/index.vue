<template>
  <div>
    <section class="articles ">
      <div class="section-center ">
        <div class="section-title my-4">
          <h2>مقالات من </h2>
        </div>

        <div class="article-center  md:grid md:grid-cols-2 gap-x-5 lg:grid-cols-3">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>

        <div class="article-btn">
          <NuxtLink class="btn " to="/articles">مشاهده تمام مقالات</NuxtLink> <br>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const {sayHello}  = useUseUtils();
sayHello()


</script>

<style>


</style>