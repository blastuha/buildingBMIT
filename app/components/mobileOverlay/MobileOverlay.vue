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
        <a
          href="#about"
          :class="styles['menu-overlay__link']"
          @click="emitToggleMenu"
          >О компании</a
        >
        <a
          href="#offers"
          :class="styles['menu-overlay__link']"
          @click="emitToggleMenu"
          >Виды работ</a
        >
        <a
          href="#services"
          :class="styles['menu-overlay__link']"
          @click="emitToggleMenu"
          >Услуги</a
        >
        <a
          href="#contacts"
          :class="styles['menu-overlay__link']"
          @click="emitToggleMenu"
          >Контакты</a
        >
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

    <!-- Кнопка "ЗАКАЗАТЬ ЗВОНОК" -->
    <Button
      text="ЗАКАЗАТЬ ЗВОНОК"
      :class="styles['menu-overlay__call-button']"
      @click="openCallFormLink"
    />

    <!-- Если одна из форм открыта, затемняем бэкграунд -->
    <div
      v-if="isCallFormOpen || isSuccessOpen"
      :class="styles['menu-overlay__dim-background']"
      @click="closeFormOutside"
    >
      <div @click.stop :class="styles['menu-overlay__form-wrapper']">
        <CallForm
          v-if="isCallFormOpen && !isSuccessOpen"
          @close-form="closeCallForm"
          @form-submitted="handleSuccess"
        />

        <!-- Компонент успеха -->
        <CallFormSuccess v-if="isSuccessOpen" @close-success="closeSuccess" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BurgerMenuCloseBtn from "../ui/BurgerMenuCloseBtn.vue";
import Button from "../ui/Button.vue";
import CallForm from "~/app/components/callForm/CallForm.vue";
import CallFormSuccess from "../callFormSuccess/CallFormSuccess.vue";
import styles from "./MobileOverlay.module.scss";

const emit = defineEmits(["toggle-menu"]);

const isCallFormOpen = ref(false);
const isSuccessOpen = ref(false);

// Открытие новой вкладки с формой
function openCallFormLink() {
  window.open("https://forms.yandex.ru/u/6786762a068ff078073f312a/", "_blank");
}

// Закрываем форму и экран успеха при клике на фон
function closeFormOutside() {
  isCallFormOpen.value = false;
  isSuccessOpen.value = false;
}

// Вызов из CallForm, если нажали на close или хотим скрыть форму
function closeCallForm() {
  isCallFormOpen.value = false;
}

// Когда форма успешно отправлена
function handleSuccess() {
  isCallFormOpen.value = false;
  isSuccessOpen.value = true;
}

// Закрываем экран успеха
function closeSuccess() {
  isSuccessOpen.value = false;
}

// Эмит для закрытия оверлея
function emitToggleMenu() {
  emit("toggle-menu");
}

defineOptions({
  name: "MobileOverlay",
});
</script>

<style lang="scss" scoped>
/* Ваши стили остаются без изменений */
</style>
