<!-- Services.vue -->
<template>
  <section :class="styles['services-section']" id="services">
    <div :class="styles['services-section__content']">
      <h1>Услуги</h1>

      <div :class="styles['services-section__details']">
        <div :class="styles['services-section__image']">
          <NuxtImg src="/servicesImage.svg" alt="services" />
        </div>

        <ul :class="styles['services-section__list']">
          <li
            v-for="(service, index) in services"
            :key="index"
            :class="styles['services-section__item']"
          >
            <span :class="styles['service-name']">{{ service.name }}</span>
            <!-- По клику на кнопку эмитим событие "open-call-form" -->
            <Button text="ЗАКАЗАТЬ" size="xl" @click="openConsultationLink" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import styles from "./Services.module.scss";
import Button from "../../ui/Button.vue";
// import { defineEmits } from "vue";

// Эмитим событие, чтобы родитель (index.vue) открыл CallForm
// const emit = defineEmits(["open-call-form"]);
// function openCallForm() {
//   emit("open-call-form");
// }

function openConsultationLink() {
  window.open("https://forms.yandex.ru/u/6786762a068ff078073f312a/", "_blank");
}

// Данные услуг
const services = [
  { name: "Ремонтные работы любой сложности" },
  { name: "Отделка помещений" },
  { name: "Установка инженерных систем" },
  { name: "Демонтажные работы" },
  { name: "Возведение заборов и ограждений" },
  { name: "Консультации по вопросам строительства и ремонта" },
  { name: "Составление смет" },
];
</script>

<style module></style>
