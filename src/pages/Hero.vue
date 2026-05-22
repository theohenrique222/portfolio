<template>
  <section class="relative min-h-screen flex items-center overflow-hidden" id="hero">
    <div class="absolute inset-0 bg-neutral-950">
      <div class="absolute inset-0 opacity-40"
        style="background: radial-gradient(ellipse at 20% 50%, #ff4d05 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #ff4d05 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, #ff4d05 0%, transparent 50%)">
      </div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-orange-color/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-orange-color/5 rounded-full blur-3xl animate-float"
        style="animation-delay: 2s;"></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-orange-color/5 rounded-full animate-spin-slow">
      </div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-orange-color/10 rounded-full animate-spin-slow"
        style="animation-direction: reverse; animation-duration: 12s;"></div>
    </div>

    <main class="relative z-10 w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 mb-6 animate-fade-in">
          <span
            class="px-4 py-1.5 text-sm font-semibold rounded-full bg-orange-color/20 text-orange-color border border-orange-color/30">
            {{ $t("hero.title-1") }}
          </span>
          <span class="text-lg text-gray-400">{{ $t("hero.title-2") }}</span>
        </div>

        <h1
          class="text-5xl font-extrabold text-white sm:text-6xl lg:text-8xl leading-tight mb-4 animate-fade-in-up [text-shadow:0_0_40px_rgba(255,77,5,0.3)]">
          Theo Henrique
        </h1>

        <h2 class="text-xl font-semibold text-gray-300 sm:text-2xl lg:text-3xl mb-6 animate-fade-in-up"
          style="animation-delay: 0.1s;">
          {{ $t("hero.stack-title") }} |
          <TypewriterText :texts="stackTexts" />
        </h2>

        <p class="text-base leading-relaxed text-gray-400 sm:text-lg max-w-xl mb-10 animate-fade-in-up"
          style="animation-delay: 0.2s;">
          {{ $t("hero.description") }}
        </p>

        <div class="flex flex-wrap items-center gap-4 animate-fade-in-up" style="animation-delay: 0.3s;">
          <a v-for="button in buttons_socials" :key="button.id" :href="button.button_href" target="_blank"
            class="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-xl"
            :class="button.colors">
            {{ button.name }}
            <ion-icon class="text-xl" :name="button.name_icon"></ion-icon>
          </a>
        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow hidden lg:block">
          <svg class="w-6 h-6 text-orange-color/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import TypewriterText from '../components/TypewriterText.vue';

export default {
  components: { TypewriterText },
  data() {
    return {
      stackTexts: ['Laravel & Vue.js', 'Full Stack Developer', 'React Native', 'UI/UX Design'],
      buttons_socials: [
        {
          id: 1,
          name: "Github",
          name_icon: "logo-github",
          colors: "bg-orange-color text-white shadow-lg shadow-orange-color/30 hover:shadow-orange-color/50 hover:-translate-y-1",
          button_href: "https://github.com/theohenrique222",
        },
        {
          id: 2,
          name: "LinkedIn",
          name_icon: "logo-linkedin",
          colors: "glass text-white hover:bg-white/20 hover:-translate-y-1",
          button_href: "https://www.linkedin.com/in/theodoro-henrique-20458827a/",
        },
      ],
    };
  },
};
</script>
