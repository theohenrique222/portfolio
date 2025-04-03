<template>
  <nav
    class="bg-bneutral-500/70 backdrop-blur text-white fixed top-0 left-0 right-0 p-2 z-50 border-b-2 shadow-2xl shadow-black border-gray-500">
    <div class="container mx-auto flex justify-between items-center max-w-6xl">

      <div class="text-4xl font-extrabold">
        <a href="/" aria-label="Home">Th<span class="text-orange-color">e</span>o<span
            class="text-orange-color">.</span></a>
      </div>

      <!-- Menu Items -->
      <div class="hidden md:flex cursor-pointer space-x-6 items-center text-sm font-light">
        <a v-for="item in items_menu" :key="item.id" :href="item.route_to"
          class="hover:text-orange-color text-gray-100">
          {{ $t(item.name) }}
        </a>

        <!-- Botão de troca de idioma -->
      </div>
      <div>
        <button @click="toggleLanguage" class="flex items-center space-x-2 bg-gray-500/20 px-3 py-1 rounded-md text-sm font-light">
          <img :src="currentFlag" alt="Change language" class="w-6 h-6" />
          <span>{{ currentLanguage.toUpperCase() }}</span>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="menuOpen" class="md:hidden mt-4 space-y-2">
      <a v-for="item in items_menu" :key="item.id" :href="item.route_to"
        class="block px-4 py-2 hover:text-orange-color">
        {{ $t(item.name) }}
      </a>
      <button @click="toggleLanguage" class="flex items-center space-x-2 px-4 py-2">
        <img :src="currentFlag" alt="Change language" class="w-6 h-6" />
        <span>{{ currentLanguage.toUpperCase() }}</span>
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

    return {
      currentLanguage: locale,
      currentFlag: computed(() => flags[locale.value]),

      toggleLanguage() {
        locale.value = locale.value === "en" ? "pt" : "en";
      }
    };
  },
  data() {
    return {
      menuOpen: false,
      items_menu: [
        { id: 1, name: "menu.home", route_to: "/" },
        { id: 2, name: "menu.about", route_to: "#about" },
        { id: 3, name: "menu.projects", route_to: "#projects" },
        { id: 4, name: "menu.contact", route_to: "#contact" }
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
