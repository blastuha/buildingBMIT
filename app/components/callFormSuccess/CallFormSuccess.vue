// CallFormSuccess.vue

<template>
  <div :class="styles['success-modal']">
    <div :class="styles['success-modal__content']">
      <button :class="styles['success-modal__close-button']" @click="close">
        ×
      </button>
      <h2 :class="styles['success-modal__title']">Заявка принята</h2>
      <p :class="styles['success-modal__description']">
        Мы свяжемся с вами в ближайшее время.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import styles from "./CallFormSuccess.module.scss";
const emit = defineEmits(["close-success"]);

function close() {
  emit("close-success");
}
</script>

<style scoped lang="scss"></style>
