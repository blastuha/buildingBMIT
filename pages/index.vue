<template>
  <main>
    <MobileOverlay
      v-if="isMobileMenuOpen && isMobile"
      @toggle-menu="toggleMobileMenu"
    />
    <LandingHeader v-if="!isMobile" />
    <MobileHeader v-show="isMobile" @toggle-menu="toggleMobileMenu" />

    <MainSection :is-mobile="isMobile" />
    <AboutUs :is-mobile="isMobile" />
    <OurWorks :is-mobile="isMobile" />
    <Services />
    <ContactForm />
    <Contacts />
    <Footer />
  </main>
</template>

<script setup="ts">
import { ref, onMounted, onUnmounted } from "vue";
import MainSection from "~/app/components/sections/main/Main.vue";
import LandingHeader from "~/app/components/header/LandingHeader.vue";
import AboutUs from "~/app/components/sections/aboutUs/AboutUs.vue";
import OurWorks from "~/app/components/sections/ourWorks/OurWorks.vue";
import Services from "~/app/components/sections/services/Services.vue";
import ContactForm from "~/app/components/sections/contactForm/ContactForm.vue";
import Contacts from "~/app/components/sections/contacts/Contacts.vue";
import Footer from "~/app/components/footer/Footer.vue";
import MobileHeader from "~/app/components/header/MobileHeader.vue";
import MobileOverlay from "~/app/components/mobileOverlay/MobileOverlay.vue";
import CallForm from "~/app/components/callForm/CallForm.vue";

const isMobile = ref(false);

const isMobileMenuOpen = ref(false);

console.log("isMobileMenuOpen", isMobileMenuOpen.value);

const checkScreenWidth = () => {
  const width = window.innerWidth;
  isMobile.value = width < 1280;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
  watch(isMobileMenuOpen, (val) => {
    document.body.style.overflow = val ? "hidden" : "";
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenWidth);
  document.body.style.overflow = "";
});
</script>

<style lang="scss" scoped></style>
