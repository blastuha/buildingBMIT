<template>
  <div :class="styles['menu-overlay']">
    <header :class="styles['menu-overlay__header']">
      <NuxtImg
        src="/companyLogo.svg"
        alt="Company Logo"
        :class="styles['menu-overlay__logo']"
      />
      <BurgerMenuCloseBtn @burger-click="emitToggleMenu" />
    </header>
    <div :class="styles['menu-overlay__content']">
      <nav :class="styles['menu-overlay__links']">
        <a href="#about" :class="styles['menu-overlay__link']">О компании</a>
        <a href="#works" :class="styles['menu-overlay__link']">Виды работ</a>
        <a href="#services" :class="styles['menu-overlay__link']">Услуги</a>
        <a href="#contacts" :class="styles['menu-overlay__link']">Контакты</a>
      </nav>
      <div :class="styles['menu-overlay__phone']">
        <div :class="styles['menu-overlay__phone-img']">
          <NuxtImg src="/icons/smallPhone.svg" alt="phone" />
        </div>

        <a
          href="tel:+79029156286"
          :class="styles['menu-overlay__phone-numbers']"
        >
          +7 (902) 915-62-86
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BurgerMenuCloseBtn from "../ui/BurgerMenuCloseBtn.vue";
import styles from "./MobileOverlay.module.scss";

const emit = defineEmits(["toggle-menu"]);

function emitToggleMenu() {
  emit("toggle-menu");
}

defineOptions({
  name: "MobileOverlay",
});
</script>

<style lang="scss" scoped></style>
