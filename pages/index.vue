<template>
  <main>
    <LandingHeader />
    <MainSection />
    <AboutUs />
  </main>
</template>

<script setup>
import MainSection from "~/app/components/sections/main/Main.vue";
import LandingHeader from "~/app/components/header/LandingHeader.vue";
import AboutUs from "~/app/components/sections/aboutUs/AboutUs.vue";
</script>

<style lang="scss" scoped></style>
