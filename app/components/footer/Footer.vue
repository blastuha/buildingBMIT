<template>
  <footer :class="styles['footer']">
    <div :class="styles['footer__content']">
      <!-- Левая колонка -->
      <div :class="styles['footer__column']">
        <p :class="styles['footer__text']">
          © «МИС центр», 2024. <br />
          Все права защищены
        </p>
      </div>

      <!-- Центральная колонка -->
      <div :class="styles['footer__column']">
        <p :class="styles['footer__text--center']">
          ООО «МИС центр»<br />
          ИНН/КПП 2457072907/245701001<br />
          ОГРН 1112457002074
        </p>
      </div>

      <!-- Правая колонка -->
      <div :class="styles['footer__column--right']">
        <p href="#" :class="styles['footer__text']">
          Политика конфиденциальности
        </p>
        <p :class="styles['footer__text']">
          Разработка сайта —
          <a href="#" :class="styles['footer__link']">Black Mesa IT</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import styles from "./Footer.module.scss";
</script>

<style module></style>
