<!-- index.vue -->
<template>
  <main>
    <!-- Мобильный оверлей (как прежде) -->
    <MobileOverlay
      v-if="isMobileMenuOpen && isMobile"
      @toggle-menu="toggleMobileMenu"
    />

    <!-- Хедер (десктопная версия) -->
    <LandingHeader v-if="!isMobile" @open-call-form="handleOpenCallForm" />

    <!-- Хедер (мобильная версия) -->
    <MobileHeader v-show="isMobile" @toggle-menu="toggleMobileMenu" />

    <MainSection :is-mobile="isMobile" @open-call-form="handleOpenCallForm" />

    <Services @open-call-form="handleOpenCallForm" />

    <ContactForm @contact-submitted="handleContactFormSubmitted" />

    <AboutUs :is-mobile="isMobile" />
    <OurWorks :is-mobile="isMobile" />
    <Contacts />
    <Footer />

    <div v-if="isSuccessOpen" class="overlay" @click="closeSuccess">
      <div class="overlay-content" @click.stop>
        <CallFormSuccess @close-success="closeSuccess" />
      </div>
    </div>

    <div v-if="isCallFormOpen" class="overlay" @click="closeAllOverlays">
      <div class="overlay-content" @click.stop>
        <CallForm @close-form="closeForm" @form-submitted="showSuccess" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import MainSection from "~/app/components/sections/main/Main.vue";
import Services from "~/app/components/sections/services/Services.vue";
import LandingHeader from "~/app/components/header/LandingHeader.vue";
import AboutUs from "~/app/components/sections/aboutUs/AboutUs.vue";
import OurWorks from "~/app/components/sections/ourWorks/OurWorks.vue";
import ContactForm from "~/app/components/sections/contactForm/ContactForm.vue";
import Contacts from "~/app/components/sections/contacts/Contacts.vue";
import Footer from "~/app/components/footer/Footer.vue";
import MobileHeader from "~/app/components/header/MobileHeader.vue";
import MobileOverlay from "~/app/components/mobileOverlay/MobileOverlay.vue";
import CallForm from "~/app/components/callForm/CallForm.vue";
import CallFormSuccess from "~/app/components/callFormSuccess/CallFormSuccess.vue";

const isMobile = ref(false);
const isMobileMenuOpen = ref(false);

// Для формы звонка (когда открываем её из MainSection, Services, Header)
const isCallFormOpen = ref(false);
const isSuccessOpen = ref(false);

/* ==== 1) При клике «ОТПРАВИТЬ» в ContactForm === */
function handleContactFormSubmitted() {
  isSuccessOpen.value = true;
}

function handleOpenCallForm() {
  isSuccessOpen.value = false;
  isCallFormOpen.value = true;
}

function closeForm() {
  isCallFormOpen.value = false;
  isSuccessOpen.value = false;
}

function showSuccess() {
  isSuccessOpen.value = true;
}

function closeSuccess() {
  isSuccessOpen.value = false;
}
function closeAllOverlays() {
  isCallFormOpen.value = false;
  isSuccessOpen.value = false;
}

/* === 4) Мобильное меню === */
function checkScreenWidth() {
  isMobile.value = window.innerWidth < 1280;
}
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

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

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
}

.overlay-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
