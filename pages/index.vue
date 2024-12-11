<template>
  <main>
    <LandingHeader />
    <MainSection />
    <AboutUs />
    <OurWorks />
    <Services />
    <ContactForm />
  </main>
</template>

<script setup>
import MainSection from "~/app/components/sections/main/Main.vue";
import LandingHeader from "~/app/components/header/LandingHeader.vue";
import AboutUs from "~/app/components/sections/aboutUs/AboutUs.vue";
import OurWorks from "~/app/components/sections/ourWorks/OurWorks.vue";
import Services from "~/app/components/sections/services/Services.vue";
import ContactForm from "~/app/components/sections/contactForm/ContactForm.vue";
</script>

<style lang="scss" scoped></style>
