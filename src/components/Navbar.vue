<template>
  <nav class="bg-black/70 backdrop-blur text-white fixed top-0 left-0 right-0 p-2 z-50 border-b-2 shadow-2xl shadow-black border-gray-500">
    <div class="container mx-auto flex justify-between items-center max-w-6xl">
      <!-- Logo -->
      <div class="text-4xl font-bold">
        <a href="/" aria-label="Home">Th<span class="text-orange-color">e</span>o<span class="text-orange-color">.</span></a>
      </div>

      <!-- Menu Items -->
      <div class="hidden md:flex cursor-pointer space-x-6">
        <a
          v-for="item in items_menu"
          :key="item.id"
          :href="item.route_to"
          class="hover:text-orange-color text-gray-100"
        >
          {{ item.name }}
        </a>
        <button @click="toggleLanguage">
          {{ $t("change_language") }}
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="menuOpen" class="md:hidden mt-4 space-y-2">
      <a
        v-for="item in items_menu"
        :key="item.id"
        :href="item.route_to"
        class="block px-4 py-2 hover:text-orange-color"
      >
        {{ item.name }}
      </a>
      <button @click="toggleLanguage" class="px-4 py-2">
        <img :src="currentFlag" alt="Change language" class="w-6 h-6 inline" />
      </button>
    </div>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { ref, computed } from 'vue';

export default {
  setup() {
    const { locale } = useI18n();
    const menuOpen = ref(false);

    const currentFlag = computed(() =>
      locale.value === 'pt' ? '/flags/en.svg' : '/flags/pt.svg'
    );

    const toggleLanguage = () => {
      locale.value = locale.value === 'pt' ? 'en' : 'pt';
    };

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const items_menu = ref([
      { id: 1, name: "Início", route_to: "#home" },
      { id: 2, name: "Sobre Mim", route_to: "#sobre" },
      { id: 3, name: "Serviços", route_to: "#servicos" },
      { id: 4, name: "Portfólio", route_to: "#portfolio" },
      { id: 5, name: "Contato", route_to: "#contato" },
    ]);

    return { toggleLanguage, currentFlag, menuOpen, toggleMenu, items_menu };
  }
};
</script>
