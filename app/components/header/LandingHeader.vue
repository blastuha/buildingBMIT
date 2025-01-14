<!-- Header.vue (LandingHeader.vue) -->
<template>
  <header class="header">
    <NuxtImg src="/companyLogo.svg" alt="logo" width="92" height="48" />
    <HeaderNav />
    <div class="header__contact">
      <PhoneBlock />
      <!-- Добавили @click="openCallForm" -->
      <Button text="ЗАКАЗАТЬ ЗВОНОК" size="xl" @click="openCallForm" />
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderNav from "./HeaderNav.vue";
import PhoneBlock from "./PhoneBlock.vue";
import Button from "@/app/components/ui/Button.vue";
import { defineEmits } from "vue";

// Создаём "эмит", чтобы родитель (index.vue) мог поймать событие
const emit = defineEmits(["open-call-form"]);

// Метод, вызываемый по клику на кнопку, эмитит событие в родитель
function openCallForm() {
  emit("open-call-form");
}
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

  @media (max-width: 1919px) {
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
