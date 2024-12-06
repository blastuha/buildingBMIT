<template>
  <section :class="styles['about-section']">
    <div :class="styles['about-section__content']">
      <!-- Левый блок: изображение -->
      <NuxtImg
        src="/aboutUsImage.svg"
        alt="about us image"
        class="about-section__image"
        width="677"
        height="558"
      />

      <!-- Правый блок: текст и информация -->
      <div :class="styles['about-section__details']">
        <h2 :class="styles['about-section__title']">О нас</h2>
        <p :class="styles['about-section__description']">
          Компания, которой можно доверить всё — от частного ремонта до
          строительства масштабных муниципальных объектов. Наши специалисты
          выполняли работы для промышленных предприятий и инфраструктурных
          проектов. Благодаря собственному ПТО и слаженной команде мы
          обеспечиваем надёжность, точность и выполнение сроков как для крупных
          организаций, так и для частных заказчиков.
        </p>

        <!-- Блок со статистикой -->
        <div :class="styles['about-section__stats']">
          <div :class="styles['about-section__stat']">
            <h3 :class="styles['about-section__stat-title']">
              11 лет на рынке
            </h3>
            <p :class="styles['about-section__stat-description']">
              Наша компания работает 11 лет и зарекомендовала себя как надёжный
              партнёр в сфере строительства.
            </p>
          </div>
          <div :class="styles['about-section__stat']">
            <h3 :class="styles['about-section__stat-title']">100+ проектов</h3>
            <p :class="styles['about-section__stat-description']">
              Реализовали более 100 успешных проектов, что подтверждает наш
              профессионализм и опыт работы.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import styles from "./AboutUs.module.scss";
</script>

<style lang="scss" module></style>
