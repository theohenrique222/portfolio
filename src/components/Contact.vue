<template>
  <section class="bg-neutral-900" id="contato">
    <main
      class="grid lg:px-0 px-10 lg:grid-cols-2 items-center gap-6 py-10 max-w-7xl m-auto"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div class="contact-text">
        <h2 class="font-extrabold text-white text-4xl md:text-5xl">
          Contate-<span class="text-orange-color">Me!</span>
        </h2>
        <h4 class="text-white my-4 text-xl font-bold">{{ title }}</h4>
        <p class="text-lg mb-4 text-gray-100 font-extralight leading-8">
          {{ content }}<br />
          <span class="text-xl font-semibold text-orange-color">{{ subTitle }}</span>
        </p>

        <div class="mb-7 text-white">
          <li class="mb-3 list-none ">
            <a  
              v-for="social in social_icons" :key="social.id"
              class="transition-all duration-300 hover:translate-x-2 items-center flex text-base hover:text-orange-color"
              href="https://wa.me/message/TQG43CPOB4N2N1"
              target="_blank"
              ><ion-icon :name=social.name class="px-3"></ion-icon>{{ social.content }}</a
            >
          </li>
        </div>
      </div>
      <div class="contact-form">
        <form
          action="https://formsubmit.co/theodoro222@hotmail.com"
          method="POST"
          enctype="text/plain"
        >
          <div
            v-for="form in form_inputs"
            :key="form.id"
            class="relative mb-3 space-y-1"
          >
            <label
              :for="form.title"
              class="relative left-0 top-0 ease-out text-white"
              >{{ form.title }}
            </label>
            <input
              :id="form.id_input"
              :name="form.name"
              :type="form.type"
              required
              class="block w-full rounded bg-neutral-800 text-white p-3 outline-none "
              :placeholder="form.placeholder"
            />
          </div>

          <div class="relative mb-3 space-y-1">
            <label
              for="mensagem"
              class="relative left-0 top-0 ease-out text-white "
              >Em que posso te ajudar?
          </label>
            <textarea
              name="mensagem: "
              id="textarea"
              rows="3"
              class="h-60 block w-full rounded resize-none bg-neutral-800 text-white px-3"
            ></textarea>
          </div>

          <button
            class="inline-block w-full text-white bg-sky-500 px-10 p-4 rounded-md hover:bg-sky-800 tracking-wider"
            type="submit"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Se você tem projeto em sua mente.",
      content: "Estou sempre aberto a novas oportunidades e adoraria ouvir sobre o seu projeto ou responder a qualquer dúvida que você possa ter. Seja para discutir uma colaboração, um desafio específico ou simplesmente para trocar ideias, sinta-se à vontade para entrar em contato. Preencha o formulário abaixo ou envie-me um e-mail diretamente. Vamos explorar como podemos trabalhar juntos para criar algo incrível!",
      subTitle: "Seu próximo projeto começa aqui.",
      form_inputs: [
        {
          id: 1,
          title: "Nome completo ",
          type: "text",
          id_input: "name",
          name: "Nome: ",
        },
        {
          id: 1,
          title: "Seu endereço de e-mail ",
          type: "text",
          id_input: "address",
          name: "E-mail: ",
        },
        {
          id: 1,
          title: "Telefone para contato ",
          type: "number",
          id_input: "phone",
          name: "Contato: ",
        },
      ],
      social_icons: [
        { id:1, content: '+55 (84) 99127-4081', name: 'logo-whatsapp' },
        { id:2, content: 'theodoro222@hotmail.com', name: 'mail-outline' },
      ],
    };
  },
};
</script>
<style>
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
