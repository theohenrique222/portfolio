<template>
  <div class="bg-neutral-950 flex items-center justify-center" id="servicos">
    <div class="container mx-auto py-8 max-w-6xl lg:px-0 px-5">
      <div class="text-center text-white mb-20 mt-10">
        <h3 data-aos="fade-up" data-aos-duration="2000" class="font-extralight">{{ $t("services-intro") }}</h3>
        <h1 data-aos="fade-up" data-aos-duration="2000" class="font-extrabold text-4xl md:text-5xl">
          <span class="text-orange-color text-4xl md:text-5xl">{{ $t("services-title-1") }}</span>
          {{ $t("services-title-2") }}
        </h1>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
        <div v-for="card in cards_container" :key="card.id"
          class="bg-neutral-800 shadow-lg rounded-lg p-6 flex flex-col items-center space-y-5">
          <ion-icon :name="card.ionIcon" class="text-5xl text-orange-500 mb-10 pt-5"></ion-icon>
          <h2 class="text-xl font-semibold text-white text-center mb-4">
            {{ $t(card.title) }}
          </h2>
          <h3 class="text-gray-100 mb-4">{{ $t(card.content) }}</h3>
          <ul class="text-white font-extralight text-left">
            <li v-for="(item, index) in card.li_contents" :key="index" class="mb-2">
              <span class="text-orange-color font-extrabold">></span> 
              {{ $t(item) }}
            </li>
          </ul>
          <h4 class="text-orange-color font-light tracking-wider italic text-center">
            {{ $t(card.conclusion) }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards_container: [
        {
          id: 1,
          title: "services-front-title",
          ionIcon: "desktop-outline",
          content: "services-front-content",
          li_contents: [
            "services-front-item-1",
            "services-front-item-2",
            "services-front-item-3"
          ],
          conclusion: "services-front-conclusion"
        },
        {
          id: 2,
          title: "services-mobile-title",
          ionIcon: "phone-portrait-outline",
          content: "services-mobile-content",
          li_contents: [
            "services-mobile-item-1",
            "services-mobile-item-2",
            "services-mobile-item-3"
          ],
          conclusion: "services-mobile-conclusion"
        },
        {
          id: 3,
          title: "services-back-title",
          ionIcon: "server-outline",
          content: "services-back-content",
          li_contents: [
            "services-back-item-1",
            "services-back-item-2",
            "services-back-item-3"
          ],
          conclusion: "services-back-conclusion"
        }
      ]
    };
  }
};
</script>
