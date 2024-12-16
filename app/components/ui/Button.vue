<template>
  <button :class="$style.button" :style="{ padding: paddingMap[buttonSize] }">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { ButtonSizes } from "@/app/types/buttonSizes";

const props = defineProps<{
  text: string;
  // size: ButtonSizes;
}>();

const buttonSize = ref<ButtonSizes>("xl");

const paddingMap: Record<ButtonSizes, string> = {
  s: "14px 20px",
  m: "15px 20px",
  l: "17px 20px",
  xl: "18px 24px",
};

// Функция для определения размера на основе ширины экрана
const updateButtonSize = () => {
  const width = window.innerWidth;

  if (width >= 1920) {
    buttonSize.value = "xl";
  } else if (width >= 1280 && width < 1920) {
    buttonSize.value = "l";
  } else if (width >= 768 && width < 1280) {
    buttonSize.value = "m";
  } else {
    buttonSize.value = "s";
  }

  console.log("Updated buttonSize:", buttonSize.value);
};

onMounted(() => {
  updateButtonSize();
  window.addEventListener("resize", updateButtonSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateButtonSize);
});
</script>

<style lang="scss" module>
.button {
  width: fit-content;
  color: #ffffff;
  background-color: #343fb8;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.01em;
  text-align: left;
  border-radius: 8px;

  &:hover {
    background-color: #bdbdbd;
  }
}
</style>
