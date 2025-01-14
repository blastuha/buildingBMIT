<!-- HeaderNav.vue -->
<template>
  <nav :class="$style['nav']">
    <ul :class="$style['nav-list']">
      <li
        v-for="(item, index) in headerNavItems"
        :key="index"
        :class="$style['nav-item']"
      >
        <a
          href="#"
          :class="$style['nav-link']"
          @click.prevent="scrollToSection(item.href)"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { headerNavItems } from "~/app/constants/headerNavItems";

// плавный скролл
function scrollToSection(href: string) {
  const anchorId = href.replace("#", "");

  const element = document.getElementById(anchorId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style lang="scss" module>
.nav {
  display: flex;
}

.nav-list {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  transition: color 0.2s;

  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  color: #ffffff;

  @media (max-width: 1919px) {
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
  }
}

// .nav-link:hover {
//   color: #000000;
// }
</style>
