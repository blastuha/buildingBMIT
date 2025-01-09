<template>
  <!-- Оверлей меню -->
  <div class="menu-overlay">
    <div class="menu-content">
      <img src="/companyLogo.svg" alt="Company Logo" class="menu-logo" />
      <nav class="menu-links">
        <a href="#about">О компании</a>
        <a href="#works">Виды работ</a>
        <a href="#services">Услуги</a>
        <a href="#contacts">Контакты</a>
      </nav>
      <div class="menu-footer">
        <a href="tel:+79029156286" class="menu-phone">
          <img src="/icons/phone.svg" alt="Phone Icon" />
          +7 (902) 915-62-86
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "MobileOverlay",
});
</script>

<style lang="scss" scoped></style>
