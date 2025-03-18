<template>
  <section class="w-full bg-black" id="sobre">
    <main class="m-auto max-w-6xl flex flex-col md:flex-row items-center justify-around">
      <!-- Imagem -->
      <div class="flex md:w-1/2 lg:justify-start justify-center pb-5">
        <img
          class="rounded-xl w-3/4 h-auto md:h-5/6"
          :src="image_src"
          :alt="name_image"
        />
      </div>
      
      <!-- Conteúdo -->
      <div class="flex flex-col lg:px-0 px-8 md:w-1/2 pb-10">
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
      description1: "Sou um desenvolvedor Full Stack apaixonado por criar soluções digitais completas, impactantes e intuitivas. Com sólida experiência em HTML, CSS e PHP, além de conhecimentos em frameworks e bibliotecas modernas, atuo tanto no desenvolvimento de interfaces responsivas quanto na construção de back-ends robustos e eficientes. Minha expertise abrange uma variedade de ferramentas e tecnologias, incluindo:",
      description2: "Meu objetivo é combinar criatividade com tecnologia de ponta para desenvolver soluções que não apenas atendam, mas superem as expectativas.",
      tecnologies: [
        { name: "Laravel: ", content: "Experiência sólida em Laravel, criando aplicações completas com integração entre front-end e back-end." },
        { name: "Tailwind CSS: ", content: "Com Tailwind CSS, desenvolvo interfaces modernas e responsivas com agilidade e flexibilidade." },
        { name: "Vue.js: ", content: "Experiência com Vue.js na criação de interfaces interativas e aplicações móveis envolventes, focando em performance e usabilidade." },
      ]
    };
  },
};
</script>

<style scoped>
/* Adicione estilos personalizados se necessário */
</style>