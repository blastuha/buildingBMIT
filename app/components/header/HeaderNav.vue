<template>
  <nav :class="$style['nav']">
    <ul :class="$style['nav-list']">
      <li
        v-for="(item, index) in headerNavItems"
        :key="index"
        :class="$style['nav-item']"
      >
        <a :href="item.href" :class="$style['nav-link']">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { headerNavItems } from "~/app/constants/headerNavItems";
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
}

// .nav-link:hover {
//   color: #000000;
// }
</style>
