<template>
  <div :class="$style['phone']">
    <div :class="$style['phone__wrapper']">
      <NuxtImg
        :class="$style['phone__icon']"
        src="/icons/bigPhone.svg"
        width="24"
        height="24"
      />
    </div>

    <span :class="$style['phone__text']">+7 (902) 915-62-86 </span>
  </div>
</template>

<script setup></script>

<style lang="scss" module>
.phone {
  display: flex;
  align-items: center;
  gap: 16px;

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    width: 44px;
    height: 44px;
    background-color: #ffffff;
    border-radius: 8px;
  }

  &__icon {
  }
}
</style>
