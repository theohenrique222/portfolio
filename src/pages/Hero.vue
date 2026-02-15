<template>
  <section class="pt-16 bg-[url('/img/bg-th.png')] h-screen bg-cover bg-black min-h-screen flex flex-col" id="hero">
    <main class="w-full max-w-6xl px-4 m-auto">
      <div class="flex flex-col px-3 space-y-10 text-2xl font-semibold text-white lg:space-y-4">
        <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-1 m-0 space-x-3">
          <h2 class="px-3 rounded-md bg-orange-color">{{ $t("hero.title-1") }}</h2>
          <h2>{{ $t("hero.title-2") }}</h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" class="space-y-2">
          <h2 class="text-4xl font-extrabold lg:text-7xl">Theo Henrique</h2>
          <h2 class="text-base font-semibold lg:text-3xl">
            {{ $t("hero.stack-title") }} | <span class="text-orange-color">{{ $t("hero.stack") }}</span>.
          </h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" class="w-full pb-10 text-base font-light tracking-widest text-gray-100 lg:w-1/2">
          
          <p>{{ $t("hero.description") }}</p>
        </div>
        <div class="flex items-center justify-center space-x-2 lg:justify-start">
          <a v-for="button in buttons_socials" :key="button.id" :href="button.button_href"
            class="flex items-center py-3 text-base font-medium uppercase rounded-md px-9 hover:opacity-70" :class="button.colors"
            target="_blank">
            {{ button.name }}
            <ion-icon class="ml-2 text-2xl" :name="button.name_icon"></ion-icon>
          </a>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      buttons_socials: [
        {
          id: 1,
          name: "Github",
          name_icon: "logo-github",
          colors: "bg-orange-color text-white",
          button_href: "https://github.com/theohenrique222",
        },
        {
          id: 2,
          name: "LinkedIn",
          name_icon: "logo-linkedin",
          colors: "bg-white text-orange-color",
          button_href: "https://www.linkedin.com/in/theodoro-henrique-20458827a/",
        },
      ],
    };
  },
};
</script>