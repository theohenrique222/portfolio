<script setup>
  import Navbar from './components/Navbar.vue';
  import Hero from './pages/Hero.vue'
  import About from './pages/About.vue';
  import Services from './pages/Services.vue';
  import Portfolio from './pages/Portfolio.vue'
  import Contact from './pages/Contact.vue';
  import Footer from './components/Footer.vue';
  import ButtonTop from './components/ButtonTop.vue';
  import ParticlesBackground from './components/ParticlesBackground.vue';
  import ScrollProgress from './components/ScrollProgress.vue';
  import SectionDivider from './components/SectionDivider.vue';
  import { VuePreloader } from 'vue-preloader';
  import '../node_modules/vue-preloader/dist/style.css'
</script>

<template>
  <div class="bg-neutral-950 min-h-screen relative">
    <ParticlesBackground />
    <ScrollProgress />

    <VuePreloader background-color="#0d0d0d" class="text-white" transition-type="fade-up" :loading-speed="25"
      :transition-speed="1400" @loading-is-over="loadingIsOver" @transition-is-over="transitionIsOver">
      <div class="flex flex-col items-center gap-4">
        <div class="w-16 h-16 border-4 border-t-orange-color border-neutral-700 rounded-full animate-spin"></div>
        <span class="text-lg font-medium">
          {{ $t("welcome") }}
        </span>
      </div>
    </VuePreloader>

    <div class="relative z-10">
      <Navbar />
      <Hero />
      <SectionDivider fill="#0d0d0d" />
      <About />
      <SectionDivider fill="#171717" />
      <Services />
      <SectionDivider fill="#0d0d0d" />
      <Portfolio />
      <SectionDivider fill="#171717" />
      <Contact />
      <Footer />
      <ButtonTop />
    </div>
  </div>
</template>
