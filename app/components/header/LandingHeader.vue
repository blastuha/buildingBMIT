<!-- Header.vue (LandingHeader.vue) -->
<template>
  <header class="header">
    <NuxtImg src="/companyLogo.svg" alt="logo" width="92" height="48" />
    <HeaderNav />
    <div class="header__contact">
      <PhoneBlock />
      <Button text="ЗАКАЗАТЬ ЗВОНОК" size="xl" @click="openConsultationLink" />
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderNav from "./HeaderNav.vue";
import PhoneBlock from "./PhoneBlock.vue";
import Button from "@/app/components/ui/Button.vue";
// import { defineEmits } from "vue";

// const emit = defineEmits(["open-call-form"]);

// function openCallForm() {
//   emit("open-call-form");
// }

function openConsultationLink() {
  window.open("https://forms.yandex.ru/u/6786762a068ff078073f312a/", "_blank");
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
