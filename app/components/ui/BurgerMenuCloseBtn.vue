<template>
  <button class="burger-menu" @click="handleClick">
    <img src="/icons/bigClose.svg" alt="burgerMenuBtn" />
  </button>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["burger-click"]);

const handleClick = () => {
  emit("burger-click");
};
</script>

<style lang="scss" scoped>
.burger-menu {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #343fb814;
  width: 48px;
  height: 48px;
  border-radius: 8px;

  img {
    width: 24px;
    height: 24px;
  }
}
</style>
