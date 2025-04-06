<script setup>
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import ButtonTop from './components/ButtonTop.vue';

import { VuePreloader } from 'vue-preloader';
import '../node_modules/vue-preloader/dist/style.css'
</script>

<template>
  <VuePreloader background-color="#1d1e1e" class="text-white" transition-type="fade-up" :loading-speed="25"
    :transition-speed="1400" @loading-is-over="loadingIsOver" @transition-is-over="transitionIsOver">
    <span>{{ $t("welcome") }}</span>
  </VuePreloader>
  <Navbar />
  <Home />
  <About />
  <Services />
  <Portfolio />
  <Contact />
  <Footer />
  <ButtonTop />
</template>

<style></style>