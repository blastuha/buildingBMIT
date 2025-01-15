<template>
  <main>
    <!-- Мобильный оверлей  -->
    <MobileOverlay
      v-if="isMobileMenuOpen && isMobile"
      @toggle-menu="toggleMobileMenu"
    />

    <!-- Хедер (десктопная версия) -->
    <LandingHeader v-if="!isMobile" />

    <!-- Хедер (мобильная версия) -->
    <MobileHeader v-show="isMobile" @toggle-menu="toggleMobileMenu" />

    <MainSection :is-mobile="isMobile" />
    <AboutUs :is-mobile="isMobile" />
    <Services />
    <!-- <ContactForm /> -->
    <OurWorks :is-mobile="isMobile" />
    <Contacts />
    <Footer />

    <div v-if="isSuccessOpen" class="overlay">
      <div class="overlay-content" @click.stop>
        <CallFormSuccess />
      </div>
    </div>

    <div v-if="isCallFormOpen" class="overlay" @click="closeAllOverlays">
      <div class="overlay-content" @click.stop>
        <CallForm />
      </div>
    </div>

    <!-- Кнопка бургер-меню -->
    <BurgerMenuBtn
      v-if="isBurgerButtonVisible"
      class="fixed-burger-btn"
      @burger-click="emitToggleMenu"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
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
import BurgerMenuBtn from "~/app/components/ui/BurgerMenuBtn.vue";

const isMobile = ref(false);
const isMobileMenuOpen = ref(false);
const isCallFormOpen = ref(false);
const isSuccessOpen = ref(false);
const isBurgerButtonVisible = ref(false); // Видимость кнопки бургер-меню

function checkScreenWidth() {
  isMobile.value = window.innerWidth < 1280;
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : "";
}

function closeAllOverlays() {
  isCallFormOpen.value = false;
  isSuccessOpen.value = false;
  isMobileMenuOpen.value = false; // Закрываем меню
  document.body.style.overflow = ""; // Разрешаем скролл
}

function emitToggleMenu() {
  toggleMobileMenu();
}

function handleScroll() {
  isBurgerButtonVisible.value = window.scrollY > 50; // Показываем кнопку, если скролл больше 50px
}

onMounted(() => {
  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenWidth);
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = ""; // Очистка стиля
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

.fixed-burger-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2000;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
