<template>
  <header class="header">
    <NuxtImg src="/companyLogo.svg" alt="logo" width="92" height="48" />
    <HeaderNav />
    <div class="header__contact">
      <PhoneBlock />
      <Button text="ЗАКАЗАТЬ ЗВОНОК" size="xl" />
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderNav from "./HeaderNav.vue";
import PhoneBlock from "./PhoneBlock.vue";
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

  @media (max-width: 1920px) {
    padding: 0 72px 0 72px;
  }

  &__contact {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }
}
</style>
