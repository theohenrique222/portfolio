<template>
  <div class="bg-black w-full h-16">
  </div>
  <section class=" lg:h-[40rem] h-screen bg-center bg-no-repeat bg-black lg:bg-top relative" id="home">
    <main class="lg:max-w-6xl max-w-sm mx-auto">
      <div class="flex-col lg:top-40 top-32 space-y-10 lg:space-y-4 text-white absolute text-2xl font-semibold px-3">
        <div class="flex flex-1 space-x-3">
          <h2 class="bg-orange-color px-3 rounded-md">Olá</h2>
          <h2>Eu sou</h2>
        </div>
        <h1 class="font-extrabold lg:text-7xl text-5xl">{{ name }}</h1>
        <h2 class="lg:text-3xl text-xl font-semibold">
          Full-Stack <span class="text-orange-color">Developer</span>.
        </h2>
        <div class="lg:w-1/2 w-full font-light text-lg tracking-wide pb-10 text-gray-100">
          <p>{{ descryption }}</p>
        </div>

        <div class="flex items-center space-x-2 lg:justify-start justify-center">
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
      name: "Theo Henrique",
      descryption:
        "Sou um desenvolvedor Full Stack focado em transformar ideias em soluções completas, combinando back-end robusto com interfaces responsivas e funcionais. Meu objetivo é entregar aplicações que não só encantem os usuários pela experiência intuitiva, mas também sejam eficientes e bem estruturadas por trás dos bastidores.",
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
