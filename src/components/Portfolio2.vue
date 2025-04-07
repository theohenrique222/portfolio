<template>
  <section class="bg-neutral-950 w-full lg:px-0 px-10 pb-20" id="portfolio">
    <div class="mb-5 text-center text-white pt-10 pb-10">
      <p class="font-light text-base">{{ $t("portfolio.title") }}</p>
      <h2 class="font-bold text-4xl">
        <span class="text-orange-color text-4xl md:text-5xl">{{ $t("portfolio.projects") }}</span> {{
          $t("portfolio.recent") }}
      </h2>
    </div>

    <div id="CardsPortfolio" class="relative max-w-6xl m-auto" data-twe-carousel-init data-twe-ride="carousel">

      <div
        class="relative w-full md:w-2/3 mx-auto rounded-xl shadow-5 shadow-neutral-900 h-1/3 overflow-hidden after:clear-both after:block after:content-['']">
        <div v-for="(card, index) in cardsContainer" :key="card.id"
          class="relative float-left w-full transition-transform duration-[600ms] ease-in-out" :class="{
            block: currentIndex === index,
            hidden: currentIndex !== index,
          }">
          <img :src="card.cardImage" :alt="card.cardTitle" class="block w-full" />
          <div
            class="lg:absolute lg:inset-x-[10%] lg:-bottom-5 items-center text-center bg-black/75 rounded-md text-white">
            <a :href=card.link target="_blank" class="text-xl text-orange-color font-bold underline">
              {{ $t(card.cardTitle) }}
              <ion-icon name="arrow-redo-outline"></ion-icon></a>
            <p class="text-sm md:text-base">{{ $t(card.cardContent) }}</p>
          </div>
        </div>
      </div>

      <button
        class="absolute flex bottom-0 left-0 top-0 z-[1] items-center text-center bg-none opacity-50 transition-opacity duration-150 ease-in-out hover:text-white hover:no-underline hover:opacity-90 focus:text-white focus:no-underline focus:opacity-90"
        type="button" @click="prevSlide">
        <span class="flex z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4d05"
            class="h-10 w-8 bg-black rounded-md p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <img :src="getPrevImage()" alt="Previous slide"
          class="h-2/5 lg:w-1/2 w-0 rounded-md shadow-5 shadow-zinc-900 blur-sm hover:blur-none" />
      </button>

      <button
        class="absolute bottom-0 right-0 top-0 z-[1] flex items-center justify-end border-0 bg-none text-center text-white opacity-50 transition-opacity duration-150 ease-in-out hover:text-white hover:no-underline hover:opacity-90 focus:text-white focus:no-underline focus:opacity-90"
        type="button" @click="nextSlide">
        <img :src="getNextImage()" alt="Nextslide"
          class="h-2/5 lg:w-1/2 w-0 rounded-md shadow-5 shadow-zinc-900 blur-sm hover:blur-none" />
        <span class="flex z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4d05"
            class="h-10 w-8 bg-black rounded-md">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
      </button>

      <div class="relative bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
        <button v-for="(card, index) in cardsContainer" :key="index" type="button" :class="{
          'bg-white opacity-100': currentIndex === index,
          'bg-white opacity-50': currentIndex !== index,
        }"
          class="mx-[3px] box-content h-1 w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-clip-padding p-0 opacity-50 transition-opacity duration-[600ms] ease-in-out"
          @click="currentIndex = index"></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      cardsContainer: [
        {
          id: 1,
          cardTitle: "portfolio.burgerTitle",
          cardImage: "/img/burger-manager.jpg",
          link: "https://burger-manager.vercel.app/",
          cardContent: "portfolio.burgerContent",
        },
        {
          id: 2,
          cardTitle: "portfolio.smileTitle",
          cardImage: "/img/ha-smile-designer.jpg",
          link: "https://smile-designer.vercel.app/",
          cardContent: "portfolio.smileContent",
        },
        {
          id: 3,
          cardTitle: "portfolio.nutriTitle",
          cardImage: "/img/nutri-base.jpg",
          link: "https://nutribase-wheat.vercel.app/",
          cardContent: "portfolio.nutriContent",
        },
        {
          id: 4,
          cardTitle: "Gerenciador de Tarefas",
          cardImage: "/img/lista-de-afazeres.jpg",
          link: "",
          cardContent: "portfolio.tasksContent",
        },
      ],
    };
  },

  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.cardsContainer.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.cardsContainer.length) %
        this.cardsContainer.length;
    },
    getNextImage() {
      const nextIndex = (this.currentIndex + 1) % this.cardsContainer.length;
      return this.cardsContainer[nextIndex].cardImage;
    },
    getPrevImage() {
      const prevIndex =
        (this.currentIndex - 1 + this.cardsContainer.length) %
        this.cardsContainer.length;
      return this.cardsContainer[prevIndex].cardImage;
    },
  },
};
</script>