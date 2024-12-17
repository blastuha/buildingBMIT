<template>
  <header class="header">
    <NuxtImg src="/companyLogo.svg" alt="logo" width="92" height="48" />
    <div class="header__buttons">
      <Button text="ЗАКАЗАТЬ ЗВОНОК" />
      <BurgerMenu />
    </div>
  </header>
</template>

<script setup lang="ts">
import BurgerMenu from "../ui/BurgerMenu.vue";
import Button from "@/app/components/ui/Button.vue";
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 40px 0 40px;

  &__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
}
</style>
