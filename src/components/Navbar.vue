<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 p-2 text-white border-b-2 shadow-2xl bg-bneutral-500/70 backdrop-blur border-gray-500/20">
    <div class="flex items-center justify-between w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">

      <div class="text-4xl font-extrabold">
        <a href="/" aria-label="Home">Th<span class="text-orange-color">e</span>o<span
            class="text-orange-color">.</span></a>
      </div>

      <div class="items-center hidden space-x-6 text-sm font-light cursor-pointer md:flex">
        <a 
          v-for="item in items_menu" 
          :key="item.id" 
          :href="item.route_to"
          :class="[
            'p-2 font-semibold border-b-2 transition',
            activeHash === item.route_to
              ? 'border-orange-color text-orange-color'
              : 'border-transparent text-gray-100 hover:text-orange-color'
          ]"
          >
          {{ $t(item.name) }}
        </a>
        
      </div>
      <div class="hidden lg:flex">
        <button @click="toggleLanguage"
          class="flex items-center px-3 py-1 space-x-2 text-sm font-light rounded-md bg-gray-500/20">
          <img :src="currentFlag" alt="Change language" class="w-5 h-5"/>
          <span>{{ $t("name") }}</span>
        </button>
      </div>

      <div class="md:hidden">
        <button @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <div v-show="menuOpen" class="mt-4 space-y-2 md:hidden">
      <a v-for="item in items_menu" :key="item.id" :href="item.route_to"
        class="block px-4 py-2 hover:text-orange-color">
        {{ $t(item.name) }}
      </a>
      
      <button @click="toggleLanguage" class="flex items-center px-4 py-2 space-x-2">
        <img :src="currentFlag" alt="Change language" class="w-6 h-6" />
        <span>{{ $t("name") }}</span>
      </button>
    </div>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  setup() {
    const { locale } = useI18n();
    const flags = {
      en: "https://cdn.pixabay.com/photo/2017/02/01/12/23/usa-2030059_1280.png",
      pt: "https://cdn.pixabay.com/photo/2013/07/12/15/50/brazil-150403_1280.png"
    };

    const changeLanguage = (newLocale) => {
      localStorage.setItem('locale', newLocale);
      location.reload();
    };

    const toggleLanguage = () => {
      const newLocale = locale.value === 'en' ? 'pt' : 'en';
      changeLanguage(newLocale);
    };

    return {
      currentLanguage: locale,
      currentFlag: computed(() => flags[locale.value]),
      toggleLanguage,
    };
  },
  data() {
    return {
      menuOpen: false,
      activeHash: window.location.hash || "#hero",
      items_menu: [
        { id: 1, name: "menu.home", route_to: "#hero" },
        { id: 2, name: "menu.about", route_to: "#about" },
        { id: 3, name: "menu.projects", route_to: "#services" },
        { id: 3, name: "menu.portfolio", route_to: "#portfolio" },
        { id: 4, name: "menu.contact", route_to: "#contact" }
      ],
    };
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.activeHash = window.location.hash || "#hero";
    })
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
