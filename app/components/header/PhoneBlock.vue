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

  // &__icon {
  // }

  &__text {
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
}
</style>
