<template>
  <section :class="styles['works-section']">
    <div :class="styles['works-section__content']">
      <h1>
        Наши работы
        <div class="swiper-buttons" v-if="isMobile">
          <div class="swiper-button custom-prev">
            <NuxtImg src="/icons/swiper/arrow-left.svg" alt="arrow" />
          </div>
          <div class="swiper-button custom-next">
            <NuxtImg src="/icons/swiper/arrow-right.svg" alt="arrow" />
          </div>
        </div>
      </h1>

      <div :class="styles['works-section__examples']" v-if="!isMobile">
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

      <div :class="styles['swiper']" v-if="isMobile">
        <swiper
          :slidesPerView="2"
          :spaceBetween="0"
          :modules="modules"
          class="mySwiper"
          :centeredSlides="true"
          :initialSlide="1"
          :navigation="{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }"
        >
          <swiper-slide class="swiper-slide">
            <figure :class="styles['works-section__example-card']">
              <NuxtImg src="/ourWorks/ourWorks1.svg" alt="example" />
              <figcaption :class="styles['works-section__example-title']">
                Пример 1
              </figcaption>
            </figure>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <figure :class="styles['works-section__example-card']">
              <NuxtImg src="/ourWorks/ourWorks2.svg" alt="example" />
              <figcaption :class="styles['works-section__example-title']">
                Пример 2
              </figcaption>
            </figure>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
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

<style scoped>
.swiper-buttons {
  display: flex;
  gap: 12px;
}

.swiper-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #343fb80a;
  border-radius: 8px;

  img {
    width: 12px;
    height: 10px;
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
