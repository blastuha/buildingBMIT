<template>
  <button :class="$style.button" :style="{ padding: paddingMap[size] }">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { ButtonSizes } from "@/app/types/buttonSizes";

const props = defineProps<{
  text: string;
  size: ButtonSizes;
}>();

const paddingMap: Record<ButtonSizes, string> = {
  s: "14px 20px",
  m: "15px 20px",
  l: "17px 20px",
  xl: "18px 24px",
};
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
