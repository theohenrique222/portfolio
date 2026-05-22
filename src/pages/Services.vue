<template>
  <section class="relative overflow-hidden bg-neutral-900 section-padding" id="services">
    <div class="absolute inset-0 opacity-5"
      style="background-image: radial-gradient(circle at 25% 25%, #ff4d05 0%, transparent 50%), radial-gradient(circle at 75% 75%, #ff4d05 0%, transparent 50%);">
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-sm font-medium tracking-widest uppercase text-orange-color mb-2" data-aos="fade-up">
          {{ $t("services-intro") }}
        </p>
        <h2 class="text-4xl font-extrabold text-white sm:text-5xl" data-aos="fade-up" data-aos-delay="100">
          <span class="text-gradient">{{ $t("services-title-1") }}</span>
          {{ $t("services-title-2") }}
        </h2>
        <div class="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-orange-color to-amber-400"></div>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(card, index) in cards_container" :key="card.id"
          class="glass-card rounded-2xl p-8 text-center transition-all duration-500 hover:border-orange-color/30 hover:shadow-xl hover:shadow-orange-color/5 hover:-translate-y-2 group"
          :data-aos="'fade-up'" :data-aos-delay="index * 150" data-aos-duration="800">
          <div
            class="inline-flex items-center justify-center w-16 h-16 mb-6 text-3xl transition-all duration-500 rounded-2xl bg-orange-color/10 text-orange-color group-hover:bg-orange-color group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-color/30">
            <ion-icon :name="card.ionIcon"></ion-icon>
          </div>

          <h3 class="mb-4 text-xl font-bold text-white">
            {{ $t(card.title) }}
          </h3>

          <p class="mb-6 text-sm leading-relaxed text-gray-400">
            {{ $t(card.content) }}
          </p>

          <ul class="mb-6 space-y-3 text-left">
            <li v-for="(item, index) in card.li_contents" :key="index"
              class="flex items-start gap-3 text-sm text-gray-400">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-orange-color"></span>
              {{ $t(item) }}
            </li>
          </ul>

          <p class="text-sm italic text-orange-color/80">
            {{ $t(card.conclusion) }}
          </p>
        </div>
      </div>
    </div>
  </section>
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
