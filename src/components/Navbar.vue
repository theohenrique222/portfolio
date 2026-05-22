<template>
  <nav class="fixed top-0 left-0 right-0 z-50 p-3 transition-all duration-300"
    :class="scrolled ? 'glass shadow-2xl' : 'bg-transparent'">
    <div class="flex items-center justify-between w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">

      <a href="/" aria-label="Home" class="text-4xl font-extrabold text-white transition-all duration-300 hover:opacity-80">
        Th<span class="text-orange-color">e</span>o<span class="text-orange-color">.</span>
      </a>

      <div class="items-center hidden space-x-1 md:flex">
        <a v-for="item in items_menu" :key="item.id" :href="item.route_to"
          class="px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg"
          :class="activeHash === item.route_to
            ? 'text-orange-color bg-orange-color/10'
            : 'text-gray-300 hover:text-orange-color hover:bg-white/5'">
          {{ $t(item.name) }}
        </a>
      </div>

      <div class="flex items-center gap-3">
        <div class="flex items-center p-0.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
          <button @click="setLanguage('en')"
            class="px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-300"
            :class="currentLanguage === 'en' ? 'bg-orange-color text-white shadow-sm' : 'text-gray-400 hover:text-white'"
            aria-label="Switch to English">
            EN
          </button>
          <button @click="setLanguage('pt')"
            class="px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-300"
            :class="currentLanguage === 'pt' ? 'bg-orange-color text-white shadow-sm' : 'text-gray-400 hover:text-white'"
            aria-label="Switch to Portuguese">
            PT
          </button>
        </div>

        <button @click="toggleMenu" class="p-2 transition-colors rounded-lg md:hidden text-gray-300 hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <transition name="mobile-menu">
      <div v-if="menuOpen" class="mx-4 mt-3 overflow-hidden rounded-2xl glass md:hidden">
        <div class="p-2 space-y-1">
          <a v-for="item in items_menu" :key="item.id" :href="item.route_to" @click="menuOpen = false"
            class="block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl"
            :class="activeHash === item.route_to
              ? 'text-orange-color bg-orange-color/10'
              : 'text-gray-300 hover:text-orange-color hover:bg-white/5'">
            {{ $t(item.name) }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale } = useI18n();

    const setLanguage = (newLocale) => {
      locale.value = newLocale;
      localStorage.setItem('locale', newLocale);
    };

    return {
      currentLanguage: locale,
      setLanguage,
    };
  },
  data() {
    return {
      menuOpen: false,
      scrolled: false,
      activeHash: '#hero',
      items_menu: [
        { id: 1, name: "menu.home", route_to: "#hero" },
        { id: 2, name: "menu.about", route_to: "#about" },
        { id: 3, name: "menu.projects", route_to: "#services" },
        { id: 4, name: "menu.portfolio", route_to: "#portfolio" },
        { id: 5, name: "menu.contact", route_to: "#contact" },
      ],
    };
  },
  mounted() {
    this.activeHash = window.location.hash || "#hero";
    window.addEventListener("hashchange", () => {
      this.activeHash = window.location.hash || "#hero";
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50;

      const sections = ["#hero", "#about", "#services", "#portfolio", "#contact"];
      let current = "#hero";
      for (const section of sections) {
        const el = document.querySelector(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          current = section;
        }
      }
      if (this.activeHash !== current) {
        this.activeHash = current;
      }
    },
  },
};
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
