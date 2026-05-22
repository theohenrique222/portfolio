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

      <div class="flex justify-center mb-12" data-aos="fade-up">
        <Select v-model="selectedTech" :options="allTechnologies" :placeholder="$t('portfolio.filter')"
          class="w-full max-w-md" />
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(card, index) in filteredCards" :key="card.id"
          class="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-color/30 hover:shadow-xl hover:shadow-orange-color/5 hover:-translate-y-2 group"
          :data-aos="'fade-up'" :data-aos-delay="index * 100" data-aos-duration="600">
          <div class="relative overflow-hidden aspect-video">
            <img :src="card.cardImage" :alt="$t(card.cardTitle)"
              class="object-cover w-full h-full transition-all duration-700 group-hover:scale-110" />
            <div
              class="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent group-hover:opacity-100">
            </div>
          </div>

          <div class="p-6">
            <h3 class="mb-2 text-xl font-bold text-white">
              {{ $t(card.cardTitle) }}
            </h3>

            <p class="mb-4 text-sm leading-relaxed text-gray-400 min-h-[3rem] line-clamp-3">
              {{ $t(card.cardContent) }}
            </p>

            <div class="flex flex-wrap gap-2 mb-5">
              <span v-for="tech in card.technologies" :key="tech"
                class="px-2.5 py-1 text-xs font-medium rounded-full bg-orange-color/10 text-orange-color border border-orange-color/20">
                {{ tech }}
              </span>
            </div>

            <div class="flex gap-3">
              <a v-if="card.repositorio" :href="card.repositorio" target="_blank"
                class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-300 border rounded-xl border-neutral-600 text-gray-300 hover:bg-neutral-700 hover:text-white">
                <i class="pi pi-github"></i>
                Repositório
              </a>
              <a :href="card.link || '#'" :target="card.link ? '_blank' : null"
                class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl"
                :class="card.link
                  ? 'bg-orange-color text-white hover:bg-orange-600 shadow-lg shadow-orange-color/20'
                  : 'bg-neutral-700 text-gray-500 cursor-not-allowed opacity-50'">
                <i class="pi pi-external-link"></i>
                {{ card.link ? 'Ver Projeto' : 'Indisponível' }}
              </a>
            </div>
          </div>
        </div>
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
        "Filament",
        "HTML",
        "CSS",
        "JSON",
      ],
      cardsContainer: [
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
