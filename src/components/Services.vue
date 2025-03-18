<template>
  <div class="bg-neutral-950 flex items-center justify-center" id="servicos">
    <div class="container mx-auto py-8 max-w-6xl lg:px-0 px-5">
        <div class="text-center text-white mb-20 mt-10">
            <h3 class="font-extralight">No que sou especialista</h3>
            <h1 class="font-extrabold text-4xl md:text-5xl"><span class="text-orange-color text-4xl md:text-5xl">Meus</span> Serviços</h1>
        </div>
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div
          v-for="card in cards_container"
          :key="card.id"
          class="bg-neutral-800 shadow-lg rounded-lg p-6 flex flex-col items-center space-y-5"
        >
          <ion-icon
            :name="card.ionIcon"
            class="text-5xl text-orange-500 mb-10 pt-5"
          ></ion-icon>
          <h2 class="text-2xl font-semibold text-white text-center mb-4">
            {{ card.title }}
          </h2>
          <h3 class="text-gray-100 text-center mb-4">{{ card.content }}</h3>
          <ul class="text-white font-extralight text-left">
            <li
              v-for="(item, index) in card.li_contents"
              :key="index"
              class="mb-2"
            >
              <ion-icon
                name="chevron-forward-outline"
                class="mr-2 text-orange-color"
              ></ion-icon
              >{{ item }}
            </li>
          </ul>
          <h4 class="text-orange-color font-bold tracking-wider italic text-center">
            {{ card.conclusion }}
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
          title: "Desenvolvimento Front-End",
          ionIcon: "desktop-outline",
          content:
            "Construção de interfaces de usuário responsivas e funcionais.",
          li_contents: [
            "Criação de interfaces responsivas e modernas utilizando Tailwind CSS.",
            "Desenvolvimento de SPAs dinâmicas com Vue.js e React.",
            "Design centrado na experiência do usuário (UX/UI).",
          ],
          conclusion:
            '"Trago suas ideias à vida com código limpo e design eficiente."',
        },
        {
          id: 2,
          title: "Desenvolvimento Mobile",
          ionIcon: "phone-portrait-outline",
          content:
            "Criação de aplicações para dispositivos móveis com experiência fluida.",
          li_contents: [
            "Desenvolvimento de aplicativos nativos com React Native.",
            "Integração com APIs e serviços backend para funcionalidades robustas.",
            "Otimização de desempenho e experiência do usuário para iOS e Android.",
          ],
          conclusion:
            '"Desenvolvo aplicativos que se destacam na palma da sua mão."',
        },
        {
          id: 3,
          title: "Desenvolvimento Back-End",
          ionIcon: "server-outline",
          content: "Construindo a fundação sólida para suas aplicações",
          li_contents: [
            "Criação de APIs e sistemas escaláveis com Laravel.",
            "Implementação de autenticação, gerenciamento de dados e segurança.",
            "Integração de banco de dados e serviços externos.",
          ],
          conclusion:
            '"Desenvolvo backends poderosos que garantem a eficiência e a segurança do seu projeto."',
        },
      ],
    };
  },
};
</script>