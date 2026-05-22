<template>
  <section class="relative overflow-hidden bg-neutral-950 section-padding" id="portfolio">
    <div class="absolute inset-0 opacity-5"
      style="background-image: radial-gradient(circle at 50% 0%, #ff4d05 0%, transparent 60%), radial-gradient(circle at 80% 100%, #ff4d05 0%, transparent 50%);">
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <p class="text-sm font-medium tracking-widest uppercase text-orange-color mb-2" data-aos="fade-up">
          {{ $t("portfolio.title") }}
        </p>
        <h2 class="text-4xl font-extrabold text-white sm:text-5xl" data-aos="fade-up" data-aos-delay="100">
          <span class="text-gradient">{{ $t("portfolio.projects") }}</span>
          {{ $t("portfolio.recent") }}
        </h2>
        <div class="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-orange-color to-amber-400"></div>
      </div>

      <div class="max-w-3xl mx-auto mb-14" data-aos="fade-up">
        <div class="flex flex-wrap items-center justify-center gap-3 p-2 glass-card rounded-2xl">
          <button @click="selectedTech = null"
            class="relative px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 overflow-hidden group"
            :class="!selectedTech
              ? 'text-white'
              : 'text-gray-400 hover:text-white'">
            <span v-if="!selectedTech"
              class="absolute inset-0 bg-gradient-to-r from-orange-color to-orange-600 rounded-xl shadow-lg shadow-orange-color/20"></span>
            <span class="relative z-10 flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
              Todos
            </span>
          </button>

          <div class="w-px h-6 bg-neutral-700"></div>

          <button v-for="tech in allTechnologies" :key="tech" @click="selectedTech = tech"
            class="relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 overflow-hidden group"
            :class="selectedTech === tech
              ? 'text-white'
              : 'text-gray-400 hover:text-white'">
            <span v-if="selectedTech === tech"
              class="absolute inset-0 bg-gradient-to-r from-orange-color to-orange-600 rounded-xl shadow-lg shadow-orange-color/20"></span>
            <span class="relative z-10 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full transition-all duration-300"
                :class="selectedTech === tech ? 'bg-white' : 'bg-neutral-500 group-hover:bg-orange-color'">
              </span>
              {{ tech }}
            </span>
          </button>
        </div>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(card, index) in filteredCards" :key="card.id"
          class="group relative glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-color/30 hover:shadow-2xl hover:shadow-orange-color/10 hover:-translate-y-2"
          :data-aos="'fade-up'" :data-aos-delay="index * 100" data-aos-duration="600">
          <div class="relative overflow-hidden aspect-video">
            <img :src="card.cardImage" :alt="$t(card.cardTitle)"
              class="object-cover w-full h-full transition-all duration-700 group-hover:scale-110" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500">
            </div>
            <div v-if="card.link"
              class="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm">
              Live
            </div>
            <div v-else
              class="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-neutral-500/20 text-neutral-400 border border-neutral-500/30 backdrop-blur-sm">
              Demo
            </div>
          </div>

          <div class="p-6">
            <h3 class="mb-3 text-xl font-bold text-white group-hover:text-orange-color transition-colors duration-300">
              {{ $t(card.cardTitle) }}
            </h3>

            <p class="mb-5 text-sm leading-relaxed text-gray-400 line-clamp-3">
              {{ $t(card.cardContent) }}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tech in card.technologies" :key="tech"
                class="px-3 py-1 text-xs font-medium rounded-lg bg-orange-color/5 text-orange-color/80 border border-orange-color/10 transition-all duration-300 group-hover:bg-orange-color/10 group-hover:border-orange-color/20">
                {{ tech }}
              </span>
            </div>

            <div class="flex gap-3">
              <a v-if="card.repositorio" :href="card.repositorio" target="_blank" rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 border rounded-xl border-neutral-700 text-gray-300 hover:bg-neutral-700 hover:text-white hover:border-neutral-600">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Código
              </a>
              <a :href="card.link || '#'" :target="card.link ? '_blank' : null" rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl"
                :class="card.link
                  ? 'bg-orange-color text-white hover:bg-orange-600 shadow-lg shadow-orange-color/20 hover:shadow-orange-color/40'
                  : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {{ card.link ? 'Abrir' : 'Em breve' }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredCards.length === 0" class="text-center py-20">
        <p class="text-gray-500 text-lg">Nenhum projeto encontrado para essa tecnologia.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedTech: null,
      allTechnologies: [
        "Laravel",
        "Vue.js",
        "React Native",
        "Tailwind CSS",
        "JavaScript",
        "MySQL",
        "AdminLTE",
        "Bootstrap",
        "Docker",
        "Filament",
        "Inertia.js",
        "HTML",
        "CSS",
        "JSON",
      ],
      cardsContainer: [
        {
          id: 9,
          cardTitle: "portfolio.fittrackTitle",
          cardImage: "/img/portfolio/fittrack.png",
          link: "",
          repositorio: "https://github.com/theohenrique222/fittrack-inertia.git",
          cardContent: "portfolio.fittrackContent",
          technologies: ["Laravel", "Vue.js", "Inertia.js", "Docker", "MySQL"]
        },
        {
          id: 1,
          cardTitle: "portfolio.flexTitle",
          cardImage: "/img/flex-sales.jpg",
          link: "",
          repositorio: "https://github.com/theohenrique222/FlexSales.git",
          cardContent: "portfolio.flexContent",
          technologies: ["Laravel", "MySQL", "AdminLTE", "JavaScript"]
        },
        {
          id: 2,
          cardTitle: "portfolio.nutriTitle",
          cardImage: "/img/nutri-base.jpg",
          link: "https://nutri-base.vercel.app/",
          repositorio: "https://github.com/theohenrique222/nutribase.git",
          cardContent: "portfolio.nutriContent",
          technologies: ["Vue.js", "Tailwind CSS"]
        },
        {
          id: 3,
          cardTitle: "portfolio.burgerTitle",
          cardImage: "/img/burger-manager.jpg",
          link: "https://burger-manager.vercel.app/",
          repositorio: "https://github.com/theohenrique222/burger-manager.git",
          cardContent: "portfolio.burgerContent",
          technologies: ["Vue.js", "JSON", "Bootstrap"]
        },
        {
          id: 4,
          cardTitle: "portfolio.smileTitle",
          cardImage: "/img/ha-smile-designer.jpg",
          link: "https://smile-designer.vercel.app/",
          repositorio: "https://github.com/theohenrique222/smile-designer.git",
          cardContent: "portfolio.smileContent",
          technologies: ["Vue.js", "Tailwind CSS"]
        },
        {
          id: 5,
          cardTitle: "portfolio.generatorTitle",
          cardImage: "/img/password-generator.jpg",
          link: "",
          repositorio: "https://github.com/theohenrique222/password-generator.git",
          cardContent: "portfolio.generatorContent",
          technologies: ["React Native"]
        },
        {
          id: 6,
          cardTitle: "portfolio.dentalTitle",
          cardImage: "/img/dental-lab.jpg",
          link: "",
          repositorio: "https://github.com/theohenrique222/password-generator.git",
          cardContent: "portfolio.dentalContent",
          technologies: ["Laravel", "Filament", "MySQL", "Vue.js", "Tailwind CSS"]
        },
        {
          id: 7,
          cardTitle: "portfolio.jsonTitle",
          cardImage: "/img/json-server.jpg",
          link: "",
          repositorio: "",
          cardContent: "portfolio.jsonContent",
          technologies: ["JavaScript", "HTML", "CSS"]
        },
        {
          id: 8,
          cardTitle: "Gerenciador de Tarefas",
          cardImage: "/img/lista-de-afazeres.jpg",
          link: "",
          repositorio: "",
          cardContent: "portfolio.tasksContent",
          technologies: ["JavaScript", "HTML", "CSS"]
        },
      ]
    };
  },
  computed: {
    filteredCards() {
      if (!this.selectedTech) return this.cardsContainer;
      return this.cardsContainer.filter(card =>
        card.technologies.some(t => t.toLowerCase() === this.selectedTech.toLowerCase())
      );
    }
  }
};
</script>
