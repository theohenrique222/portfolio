<template>
  <section class="w-full bg-black">
    <main class="m-auto max-w-7xl flex flex-col md:flex-row items-center justify-around">
      <!-- Imagem -->
      <div class="flex md:w-1/2 lg:justify-start justify-center">
        <img
          class="rounded-xl w-3/4 h-auto md:h-5/6"
          :src="image_src"
          :alt="name_image"
        />
      </div>
      
      <!-- Conteúdo -->
      <div class="flex flex-col lg:px-0 px-10 md:w-1/2 pb-10">
        <h1 class="font-extrabold text-4xl md:text-5xl mb-5 text-white">
          Sobre <span class="text-orange-500">Mim</span>
        </h1>
        <h2 class="font-semibold text-lg md:text-xl mb-5 text-gray-300">
          Bem-vindo ao meu portfólio!
        </h2>
        <h3 class="tracking-widest font-light text-base mb-5 text-gray-400">
          {{ description1 }}
        </h3>
        <ul class="tracking-widest font-light text-base mb-5 text-gray-300 pl-3 list-disc">
          <li v-for="tecnologie in tecnologies" :key="tecnologie.id" class="mb-2">
            <ion-icon name="chevron-forward-outline" class="text-orange-500"></ion-icon>
            <span class="text-orange-500 font-bold">{{ tecnologie.name }}</span>
            {{ tecnologie.content }}
          </li>
        </ul>
        <h3 class="tracking-widest font-light text-base mb-5 text-gray-400">
          {{ description2 }}
        </h3>
        <span class="text-xl font-bold text-orange-500">
          Vamos construir algo incrível juntos!
        </span>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      image_src: "/img/avatar.jpg",
      name_image: "Theo Henrique",
      description1: "Sou um desenvolvedor front-end apaixonado por criar experiências digitais impactantes e intuitivas. Com uma sólida experiência em HTML, CSS e JavaScript, e conhecimento em frameworks e bibliotecas modernos. Minha expertise abrange uma variedade de ferramentas e tecnologias, incluindo:",
      description2: "Meu objetivo é combinar criatividade com tecnologia de ponta para desenvolver soluções que não apenas atendam, mas superem as expectativas.",
      tecnologies: [
        { id: 1, name: "Tailwind CSS: ", content: "Para criar designs personalizados e responsivos de forma eficiente." },
        { id: 2, name: "Vue.js e React Native: ", content: "Para construir interfaces dinâmicas e aplicações móveis envolventes." },
        { id: 3, name: "Laravel: ", content: "Compreendo as bases deste framework PHP, o que me permite colaborar eficazmente em projetos que integram front-end e back-end." },
      ]
    };
  },
};
</script>

<style scoped>
/* Adicione estilos personalizados se necessário */
</style>