<template>
  <header class="header">
    <NuxtImg src="/companyLogo.svg" alt="logo" width="92" height="48" />
    <div class="header__buttons">
      <Button
        text="ЗАКАЗАТЬ ЗВОНОК"
        class="call-btn"
        @click="openConsultationLink"
      />
      <BurgerMenuBtn @burger-click="emitToggleMenu" />
    </div>
  </header>
</template>

<script setup lang="ts">
import BurgerMenuBtn from "../ui/BurgerMenuBtn.vue";
import Button from "@/app/components/ui/Button.vue";

const emit = defineEmits(["toggle-menu"]);

function emitToggleMenu() {
  emit("toggle-menu");
}

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
  padding: 0 40px 0 40px;

  img {
    @media (max-width: 743px) {
      width: 76px;
      height: 40px;
    }
  }

  &__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  .call-btn {
    @media (max-width: 743px) {
      display: none;
    }
  }
}
</style>
