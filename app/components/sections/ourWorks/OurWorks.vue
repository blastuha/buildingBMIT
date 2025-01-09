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
          :slidesPerView="2"
          :spaceBetween="60"
          :modules="modules"
          class="mySwiper"
          :centeredSlides="true"
          :initialSlide="1"
        >
          <swiper-slide>
            <figure :class="styles['works-section__example-card']">
              <NuxtImg src="/ourWorks/ourWorks1.svg" alt="example" />
              <figcaption :class="styles['works-section__example-title']">
                Пример 1
              </figcaption>
            </figure>
          </swiper-slide>
          <swiper-slide>
            <figure :class="styles['works-section__example-card']">
              <NuxtImg src="/ourWorks/ourWorks2.svg" alt="example" />
              <figcaption :class="styles['works-section__example-title']">
                Пример 2
              </figcaption>
            </figure>
          </swiper-slide>
          <swiper-slide>
            <figure :class="styles['works-section__example-card']">
              <NuxtImg src="/ourWorks/ourWorks3.svg" alt="example" />
              <figcaption :class="styles['works-section__example-title']">
                Пример 3
              </figcaption>
            </figure>
          </swiper-slide>
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

const modules = [Navigation, Pagination];
</script>

<style module></style>
