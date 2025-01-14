<!-- ContactForm.vue -->
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
      <form
        :class="styles['contact-section__form']"
        @submit.prevent="submitContactForm"
      >
        <div :class="styles['contact-section__input-group']">
          <input
            type="text"
            :class="styles['contact-section__input']"
            placeholder="Имя"
            v-model="name"
          />
        </div>
        <div :class="styles['contact-section__input-group']">
          <input
            type="tel"
            :class="styles['contact-section__input']"
            placeholder="+7"
            v-model="phone"
          />
        </div>
        <div :class="styles['contact-section__input-group']">
          <textarea
            :class="styles['contact-section__textarea']"
            placeholder="Комментарий"
            v-model="comment"
          ></textarea>
        </div>
        <div :class="styles['contact-section__checkbox-group']">
          <input
            type="checkbox"
            id="agreement"
            :class="styles['contact-section__checkbox']"
            v-model="agreement"
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

      <!-- Кнопка "ОТПРАВИТЬ" -->
      <Button
        size="xl"
        text="ОТПРАВИТЬ"
        :class="styles['contact-section__button']"
        @click.prevent="submitContactForm"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import styles from "./ContactForm.module.scss";
import Button from "../../ui/Button.vue";

// Локальные поля
const name = ref("");
const phone = ref("");
const comment = ref("");
const agreement = ref(false);

const emit = defineEmits(["contact-submitted"]);

function submitContactForm() {
  emit("contact-submitted");
}
</script>

<style module></style>
