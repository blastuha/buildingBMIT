<template>
  <section :class="styles['services-section']">
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
            <Button text="ЗАКАЗАТЬ" size="xl" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import styles from "./Services.module.scss";
import Button from "../../ui/Button.vue";

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
