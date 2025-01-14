<template>
  <section :class="styles['contacts-section']" id="contacts">
    <div :class="styles['contacts-section__content']">
      <!-- Заголовок -->
      <h1 :class="styles['contacts-section__title']">Контакты</h1>

      <!-- Список контактной информации -->
      <div :class="styles['contacts-section__info']">
        <div :class="styles['contacts-section__info-item']">
          <span :class="styles['contacts-section__info-label']">Почта</span>
          <a
            href="mailto:miszentr@mail.ru"
            :class="styles['contacts-section__info-value']"
          >
            miszentr@mail.ru
          </a>
        </div>
        <div :class="styles['contacts-section__info-item']">
          <span :class="styles['contacts-section__info-label']">Адрес</span>
          <p :class="styles['contacts-section__info-value']">
            г. Санкт-Петербург,<br />
            ул. Рузовская, д. 5, офис 1
          </p>
        </div>
        <div :class="styles['contacts-section__info-item']">
          <span :class="styles['contacts-section__info-label']">Телефон</span>
          <a
            href="tel:+79029156286"
            :class="styles['contacts-section__info-value']"
          >
            +7 (902) 915-62-86
          </a>
        </div>
        <div :class="styles['contacts-section__info-item']">
          <span :class="styles['contacts-section__info-label']"
            >Мессенджер</span
          >
          <p :class="styles['contacts-section__info-value']">Ватсап</p>
        </div>
      </div>

      <!-- Карта -->
      <div :class="styles['contacts-section__map']">
        <!-- Здесь должен быть компонент карты, либо img -->
        <img src="/map.png" alt="Карта с адресом" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import styles from "./Contacts.module.scss";
</script>

<style module></style>
