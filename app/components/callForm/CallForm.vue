<!-- CallForm.vue -->
<template>
  <div :class="styles['call-form__content']">
    <button :class="styles['call-form__close-button']" @click="handleCloseForm">
      ×
    </button>

    <!-- Блок заголовка и описания -->
    <div :class="styles['call-form__header']">
      <h1 :class="styles['call-form__title']">Заказать звонок</h1>
      <p :class="styles['call-form__description']">
        Заполните форму, чтобы оставить заявку на звонок. Мы свяжемся с вами в
        ближайшее время.
      </p>
    </div>

    <!-- Блок формы -->
    <form :class="styles['call-form__form']" @submit.prevent="submitForm">
      <div :class="styles['call-form__input-group']">
        <input
          type="text"
          :class="styles['call-form__input']"
          placeholder="Имя"
          v-model="name"
        />
      </div>
      <div :class="styles['call-form__input-group']">
        <input
          type="tel"
          :class="styles['call-form__input']"
          placeholder="+7"
          v-model="phone"
        />
      </div>
      <div :class="styles['call-form__input-group']">
        <textarea
          :class="styles['call-form__textarea']"
          placeholder="Комментарий"
          v-model="comment"
        ></textarea>
      </div>
      <div :class="styles['call-form__checkbox-group']">
        <input
          type="checkbox"
          id="agreement"
          :class="styles['call-form__checkbox']"
          v-model="agreement"
        />
        <label for="agreement" :class="styles['call-form__checkbox-label']">
          Нажимая на кнопку, я соглашаюсь с
          <a href="#">политикой обработки персональных данных</a>
        </label>
      </div>

      <!-- Кнопка отправки формы -->
      <div style="margin-top: 16px">
        <Button
          size="xl"
          text="ОТПРАВИТЬ"
          :class="styles['call-form__button']"
          type="submit"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "../ui/Button.vue";
import styles from "./CallForm.module.scss";

// Пробные поля
const name = ref("");
const phone = ref("");
const comment = ref("");
const agreement = ref(false);

const emit = defineEmits(["close-form", "form-submitted"]);

// Обработка сабмита
function submitForm() {
  emit("form-submitted");
}

function handleCloseForm() {
  emit("close-form");
}
</script>
