<template>
  <section class="bg-neutral-900" id="contato">
    <main class="grid lg:px-0 px-10 lg:grid-cols-2 items-center gap-6 py-10 max-w-6xl m-auto" id="contact">
      <div data-aos="fade-up" data-aos-duration="1000" class="contact-text">
        <h2 class="font-extrabold text-white text-4xl md:text-5xl">
          {{ $t("contact.title") }}<span class="text-orange-color">{{ $t("contact.me") }}</span>
        </h2>
        <h4 class="text-white my-4 text-xl font-bold">{{ $t(title) }}</h4>
        <p class="text-lg mb-4 text-gray-100 font-extralight leading-8">
          {{ $t(content) }}<br />
          <span class="text-xl font-semibold text-orange-color">{{ $t(subTitle) }}</span>
        </p>

        <div class="mb-7 text-white">
          <li class="mb-3 list-none ">
            <a v-for="social in social_icons" :key="social.id"
              class="transition-all duration-300 hover:translate-x-2 items-center flex text-base hover:text-orange-color"
              :href="social.href" target="_blank"><ion-icon :name=social.name class="px-3"></ion-icon>{{ social.content
              }}</a>
          </li>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" class="contact-form">
        <form action="https://formsubmit.co/theodoro222@hotmail.com" method="POST" enctype="text/plain">
          <div v-for="form in form_inputs" :key="form.id" class="relative mb-3 space-y-1">
            <label :for="form.title" class="relative left-0 top-0 ease-out text-white">{{ $t(form.title) }}
            </label>
            <input :id="form.id_input" :name="form.name" :type="form.type" required
              class="block w-full rounded bg-neutral-800 text-white p-3 outline-none "
              :placeholder="form.placeholder" />
          </div>

          <div class="relative mb-3 space-y-1">
            <label for="mensagem" class="relative left-0 top-0 ease-out text-white ">{{ $t("contact.messageLabel") }}
            </label>
            <textarea name="mensagem: " id="textarea" rows="3"
              class="h-60 block w-full rounded resize-none bg-neutral-800 text-white p-3"></textarea>
          </div>

          <button
            class="inline-block w-full text-white bg-success-500 px-10 p-4 rounded-md hover:bg-success-800 tracking-wider"
            type="submit">
            {{ $t("contact.sendButton") }}
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
      title: "contact.subtitle",
      content: "contact.content",
      subTitle: "contact.highlight",
      form_inputs: [
        { id: 1, title: "contact.fullName", type: "text", id_input: "name", name: "Nome" },

        {
          id: 1,
          title: "contact.email",
          type: "text",
          id_input: "address",
          name: "E-mail: ",
        },
        {
          id: 2,
          title: "contact.phone",
          type: "number",
          id_input: "phone",
          name: "Contato: ",
        },
      ],
      social_icons: [
        { id: 1, content: 'Theodoro Henrique', name: 'logo-linkedin', href: 'https://www.linkedin.com/in/theodoro-henrique-20458827a/' },
        { id: 2, content: 'theodoro222@hotmail.com', name: 'mail-outline', href: 'mailto:theodoro222@hotmail.com' },
        { id: 3, content: '@theohbezerra_', name: 'logo-instagram', href: 'https://www.instagram.com/theohbezerra_/?hl=pt' },
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
