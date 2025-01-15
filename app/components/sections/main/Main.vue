<template>
  <section :class="styles['intro-section']">
    <div :class="styles['intro-section__content']">
      <div :class="styles['intro-section__content-wrapper']">
        <h1 :class="styles['intro-section__title']">
          Надёжность и качество на&nbsp;любом этапе строительства
        </h1>
        <p :class="styles['intro-section__text']">
          Опыт, современные технологии и собственное ПТО позволяют нам
          гарантировать точность и профессионализм на каждом этапе работы.
          Мы&nbsp;всегда стремимся к&nbsp;высокому результату, независимо
          от&nbsp;масштаба проекта
        </p>
      </div>

      <!-- Кнопки, при клике на которые хотим открыть новую вкладку -->
      <Button
        text="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
        :class="styles['intro-section__btn']"
        @click="openConsultationLink"
      />

      <!-- Картинка (мобильная) -->
      <div :class="styles['intro-section__image']" v-if="isMobile">
        <NuxtImg src="/mainSectionImage.svg" alt="mainBg" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import styles from "./Main.module.scss";
import Button from "@/app/components/ui/Button.vue";
import { defineProps } from "vue";

// Принимаем пропсу для проверки мобильной версии
defineProps({
  isMobile: Boolean,
});

// Метод для открытия новой вкладки с формой
function openConsultationLink() {
  window.open("https://forms.yandex.ru/u/6786762a068ff078073f312a/", "_blank");
}
</script>

<style lang="scss" module></style>
