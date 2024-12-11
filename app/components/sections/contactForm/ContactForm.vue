<template>
  <section :class="styles['contact-section']">
    <div :class="styles['contact-section__content']">
      <!-- Блок заголовка и описания -->
      <div :class="styles['contact-section__header']">
        <h1 :class="styles['contact-section__title']">Заказать звонок</h1>
        <p :class="styles['contact-section__description']">
          Заполните форму, чтобы оставить заявку на звонок. Мы свяжемся с вами в
          ближайшее время.
        </p>
      </div>

      <!-- Блок формы -->
      <form :class="styles['contact-section__form']">
        <div :class="styles['contact-section__input-group']">
          <input
            type="text"
            :class="styles['contact-section__input']"
            placeholder="Имя"
          />
        </div>
        <div :class="styles['contact-section__input-group']">
          <input
            type="tel"
            :class="styles['contact-section__input']"
            placeholder="+7"
          />
        </div>
        <div :class="styles['contact-section__input-group']">
          <textarea
            :class="styles['contact-section__textarea']"
            placeholder="Комментарий"
          ></textarea>
        </div>
        <div :class="styles['contact-section__checkbox-group']">
          <input
            type="checkbox"
            id="agreement"
            :class="styles['contact-section__checkbox']"
          />
          <label
            for="agreement"
            :class="styles['contact-section__checkbox-label']"
          >
            Нажимая на кнопку, я соглашаюсь с
            <a href="#">политикой обработки персональных данных</a>
          </label>
        </div>
      </form>

      <Button
        size="xl"
        text="ОТПРАВИТЬ"
        :class="styles['contact-section__button']"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import styles from "./ContactForm.module.scss";
import Button from "../../ui/Button.vue";
</script>

<style module></style>
