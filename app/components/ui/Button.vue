<template>
  <button :class="$style.button">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<style lang="scss" module>
.button {
  width: fit-content;
  padding: 18px 24px 18px 24px;

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
