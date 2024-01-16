<template>
  <div 
    class="article-card  bg-[--clr-grey-4] mb-8 shadow-light transition-all duration-500 hover:shadow-dark hover:scale-[1.02]">
    <div class="article-img-container relative">
      <img class="atricle-img object-cover h-60" src="/img/img-1.jpg" alt="">
      <span class="article-category absolute bottom-0 right-0 p-1 bg-[--clr-primary-3] text-white">طبیعت</span>
    </div>
    <div class="article-info py-5 px-6 text-right">
      <h4>لورم ایپسوم</h4>
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
        گرافیک است. </p>
      <div class="article-footer flex justify-between items-center">
        <p>
          <Icon name="uil:pen"></Icon>
          بهزاد صادقی
        </p>
        <p>6 دقیقه</p>
        <a class="text-[--clr-primary-2]" href="">نمایش</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.article-footer p {
  @apply mb-0 text-[--clr-primary-3]
}


</style>