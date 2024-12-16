<template>
  <section :class="styles['works-section']">
    <div :class="styles['works-section__content']">
      <h1>Наши работы</h1>
      <div :class="styles['works-section__examples']">
        <figure :class="styles['works-section__example-card']">
          <NuxtImg src="/ourWorks/ourWorks1.svg" alt="exmaple" />
          <figcaption :class="styles['works-section__example-title']">
            Пример 1
          </figcaption>
        </figure>

        <figure :class="styles['works-section__example-card']">
          <NuxtImg src="/ourWorks/ourWorks2.svg" alt="exmaple" />
          <figcaption :class="styles['works-section__example-title']">
            Пример 2
          </figcaption>
        </figure>

        <figure :class="styles['works-section__example-card']">
          <NuxtImg src="/ourWorks/ourWorks3.svg" alt="exmaple" />
          <figcaption :class="styles['works-section__example-title']">
            Пример 3
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import styles from "./OurWorks.module.scss";
</script>

<style module></style>
