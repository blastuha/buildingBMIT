<template>
  <section :class="styles['works-section']">
    <div :class="styles['works-section__content']">
      <h1>Наши работы</h1>
      <!-- <div :class="styles['works-section__examples']" v-if="isMobile">
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
      </div> -->

      <!-- Swiper с модулями -->
      <div :class="styles['swiper']">
        <swiper
          class="mySwiper"
          :modules="[Navigation, Pagination]"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        >
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide
          ><swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide
          ><swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide
          ><swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./OurWorks.module.scss";

defineProps({
  isMobile: Boolean,
});
</script>

<style module>
</style>
