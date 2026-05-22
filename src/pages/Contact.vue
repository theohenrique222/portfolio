<template>
  <section class="relative overflow-hidden bg-neutral-900 section-padding" id="contact">
    <div class="absolute top-0 left-0 w-64 h-64 opacity-10 bg-orange-color/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-80 h-80 opacity-10 bg-orange-color/10 rounded-full blur-3xl"></div>

    <main class="relative z-10 max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-sm font-medium tracking-widest uppercase text-orange-color mb-2" data-aos="fade-up">Contato</p>
        <h2 class="text-4xl font-extrabold text-white sm:text-5xl" data-aos="fade-up" data-aos-delay="100">
          {{ $t("contact.title") }}<span class="text-gradient">{{ $t("contact.me") }}</span>
        </h2>
        <div class="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-orange-color to-amber-400"></div>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h3 class="mb-4 text-2xl font-bold text-white">{{ $t(title) }}</h3>
          <p class="mb-6 leading-relaxed text-gray-400">
            {{ $t(content) }}
            <br />
            <span class="block mt-2 text-lg font-semibold text-gradient">{{ $t(subTitle) }}</span>
          </p>

          <div class="space-y-4">
            <a v-for="social in social_icons" :key="social.id" :href="social.href" target="_blank"
              class="flex items-center gap-4 p-4 transition-all duration-300 rounded-xl glass-card group hover:border-orange-color/30 hover:-translate-y-1">
              <div
                class="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-color/10 flex items-center justify-center text-2xl text-orange-color transition-all duration-300 group-hover:bg-orange-color group-hover:text-white">
                <ion-icon :name="social.name"></ion-icon>
              </div>
              <span class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {{ social.content }}
              </span>
            </a>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
          <form @submit.prevent="sendMessage" class="glass-card rounded-2xl p-8 space-y-6">
            <div v-for="input in form_inputs" :key="input.id" class="space-y-2">
              <label :for="input.id_input" class="block text-sm font-medium text-gray-300">
                {{ $t(input.title) }}
              </label>
              <input v-model="form[input.id_input]" :id="input.id_input" :type="input.type" required
                class="w-full px-4 py-3 text-white transition-all duration-300 rounded-xl bg-neutral-800/50 border border-neutral-700 focus:border-orange-color focus:ring-1 focus:ring-orange-color outline-none placeholder-gray-500" />
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-300">
                {{ $t("contact.messageLabel") }}
              </label>
              <textarea v-model="form.message" rows="4"
                class="w-full px-4 py-3 text-white transition-all duration-300 rounded-xl bg-neutral-800/50 border border-neutral-700 focus:border-orange-color focus:ring-1 focus:ring-orange-color outline-none placeholder-gray-500 resize-none">
              </textarea>
            </div>

            <button type="submit"
              class="w-full px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 rounded-xl bg-orange-color hover:bg-orange-600 shadow-lg shadow-orange-color/20 hover:shadow-orange-color/40 hover:-translate-y-0.5">
              {{ $t("contact.sendButton") }}
            </button>
          </form>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      title: "contact.subtitle",
      content: "contact.content",
      subTitle: "contact.highlight",
      form_inputs: [
        {
          id: 1,
          title: "contact.fullName",
          type: "text",
          id_input: "name"
        },
        {
          id: 2,
          title: "contact.email",
          type: "email",
          id_input: "email"
        },
        {
          id: 3,
          title: "contact.phone",
          type: "text",
          id_input: "phone"
        },
      ],
      social_icons: [
        {
          id: 1,
          content: 'Theodoro Henrique',
          name: 'logo-linkedin',
          href: 'https://www.linkedin.com/in/theodoro-henrique-20458827a/'
        },
        {
          id: 2,
          content: 'theodoro222@hotmail.com',
          name: 'mail-outline',
          href: 'mailto:theodoro222@hotmail.com'
        },
        {
          id: 3,
          content: '@theohbezerra_',
          name: 'logo-instagram',
          href: 'https://www.instagram.com/theohbezerra_/?hl=pt'
        },
      ],
    };
  },

  methods: {
    async sendMessage() {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.form.name,
            email: this.form.email,
            phone: this.form.phone,
            message: this.form.message
          })
        })

        const data = await response.json()

        if (data.success) {
          alert('Mensagem enviada com sucesso!')
          this.form =
          {
            name: '',
            email: '',
            phone: '',
            message: ''
          }
        } else {
          alert('Erro ao enviar mensagem.')
        }
      } catch (error) {
        alert(`Erro ${error.message}`)
      }
    }
  }
}
</script>
