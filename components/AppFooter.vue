<template>
  <footer dir="rtl" class="footer">
    <section>
      <ul class="footer-links">
        <li>
          <NuxtLink :to="{ name: 'index' }" class="nav-link scroll-link cursor-pointer">صفحه اصلی</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products/" class="nav-link scroll-link cursor-pointer">محصولات</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'about' }" class="nav-link scroll-link cursor-pointer">درباره ما</NuxtLink>
        </li>

      </ul>
      <ul class="footer-icons">
        <li><a class="footer-icon" href="https://instagram.com/behzad.1997">
            <Icon name="uil:instagram"></Icon>
          </a></li>
        <li><a class="footer-icon" href="https://telegram.me/ibehzadi">
            <Icon name="uil:telegram"></Icon>
          </a></li>
        <li><a class="footer-icon" href="">
            <Icon name="uil:twitter"></Icon>
          </a></li>
      </ul>
      <p class="copyright">Made with NuxtJS</p>
    </section>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style>
.footer {
  background: var(--clr-footer);
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
}

.footer-links,
.footer-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.footer-link {
  color: var(--clr-white);
  font-size: 1rem;
  margin-right: 1rem;
  transition: var(--transition);
}

.footer-link:hover {
  color: var(--clr-primary-2);
}

.footer-icon {
  font-size: 2rem;
  margin-right: 1rem;
  color: var(--clr-primary-3);
  transition: var(--transition);
}

.footer-icon:hover {
  color: var(--clr-primary-2);
}

.copyright {
  color: var(--clr-white);
}
</style>