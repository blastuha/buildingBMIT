<template>
  <button class="burger-menu">
    <img src="/public/icons/bigBurgerMenu.svg" alt="burgerMenu" />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.burger-menu {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #343fb814;
  width: 48px;
  height: 48px;
  border-radius: 8px;

  img {
    width: 24px;
    height: 24px;
  }
}
</style>
