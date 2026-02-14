<script setup>
  import Navbar from './components/Navbar.vue';
  import Hero from './pages/Hero.vue'
  import About from './pages/About.vue';
  import Services from './pages/Services.vue';
  import Portfolio from './pages/Portfolio.vue'
  import Contact from './pages/Contact.vue';
  import Footer from './components/Footer.vue';
  import ButtonTop from './components/ButtonTop.vue';
  import { VuePreloader } from 'vue-preloader';
  import '../node_modules/vue-preloader/dist/style.css'
</script>

<template>
  <VuePreloader background-color="#1d1e1e" class="text-white" transition-type="fade-up" :loading-speed="25"
    :transition-speed="1400" @loading-is-over="loadingIsOver" @transition-is-over="transitionIsOver">
    <span class="flex items-center gap-2 text-xl">
      {{ $t("welcome") }} <i class="pi pi-spin pi-spinner" style="font-size: 1.5rem"></i>
    </span>
  </VuePreloader>
  <Navbar />
  <Hero/>
  <About/>
  <Services/>
  <Portfolio/>
  <Contact/>
  <Footer/>
  <ButtonTop/>
</template>