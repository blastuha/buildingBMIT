<template>
  <section :class="styles['intro-section']">
    <div :class="styles['intro-section__content']">
      <div :class="styles['intro-section__content-wrapper']">
        <h1 :class="styles['intro-section__title']">
          Надёжность и качество на любом этапе строительства
        </h1>
        <p :class="styles['intro-section__text']">
          Опыт, современные технологии и собственное ПТО позволяют нам
          гарантировать точность и профессионализм на каждом этапе работы.
          Мы всегда стремимся к высокому результату, независимо от масштаба
          проекта
        </p>
      </div>

      <Button text="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ" />
    </div>
  </section>
</template>

<script setup>
import styles from "./Main.module.scss";
import Button from "@/app/components/ui/Button.vue";
</script>

<style lang="scss" module></style>
