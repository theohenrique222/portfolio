<template>
  <section class="bg-[url('/img/bg.jpg')] h-screen bg-cover bg-black" id="home">
    <main class="lg:max-w-6xl max-w-sm mx-auto">
      <div class="flex-col lg:top-40 top-24 space-y-10 lg:space-y-4 text-white absolute text-2xl font-semibold px-3">
        <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-1 space-x-3 m-0">
          <h2 class="bg-orange-color px-3 rounded-md">{{ $t("title-1") }}</h2>
          <h2>{{ $t("title-2") }}</h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class="space-y-3">
          <h2 class="font-extrabold lg:text-7xl text-5xl">Theo Henrique</h2>
          <h2 class="lg:text-3xl text-xl font-semibold">
            Full-Stack <span class="text-orange-color">Developer</span>.
          </h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class="lg:w-1/2 w-full font-light text-base pb-10 text-gray-100 tracking-widest">
          <p>{{ $t("description") }}</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class="flex items-center space-x-2 lg:justify-start justify-center">
          <a v-for="button in buttons_socials" :key="button.id" :href="button.button_href"
            class="flex items-center px-9 py-3 text-base font-medium uppercase rounded-md" :class="button.colors"
            target="_blank">
            {{ button.name }}
            <ion-icon class="text-2xl ml-2" :name="button.name_icon"></ion-icon>
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