<!-- MainSection.vue -->
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

      <!-- Кнопки, при клике на которые хотим открыть CallForm на уровне index.vue -->
      <Button
        text="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
        :class="styles['intro-section__btn']"
        @click="openCallForm"
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
import { defineProps, defineEmits } from "vue";

defineProps({
  isMobile: Boolean,
});

// Эмитим событие "open-call-form" при клике на кнопку
const emit = defineEmits(["open-call-form"]);

function openCallForm() {
  emit("open-call-form");
}
</script>

<style lang="scss" module></style>
