<template>
  <section class="relative overflow-hidden bg-neutral-900 section-padding" id="contact">
    <div class="absolute top-20 left-10 w-72 h-72 opacity-10 bg-orange-color/20 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-40 right-20 w-96 h-96 opacity-10 bg-amber-400/10 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] bg-gradient-to-r from-orange-color via-amber-400 to-orange-color rounded-full blur-3xl animate-spin-slow"></div>
    <div class="absolute inset-0 opacity-[0.015]"
      style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;">
    </div>

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
          </p>

          <h4 class="mb-4 text-xs font-semibold tracking-widest text-gray-500 uppercase">Redes Sociais</h4>
          <div class="space-y-3">
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

          <span class="block mt-8 text-lg font-semibold text-gradient">{{ $t(subTitle) }}</span>
          <div class="flex items-center gap-2 mt-3 text-sm text-gray-400">
            <ion-icon name="time-outline" class="text-lg text-orange-color"></ion-icon>
            <span>{{ $t("contact.responseTime") }}</span>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
          <form @submit.prevent="sendMessage" class="glass-card rounded-2xl p-8 space-y-6 relative overflow-hidden group">
            <div
              class="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-orange-color via-amber-400 to-orange-color opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm">
            </div>

            <transition name="slide-down">
              <div v-if="notification.show"
                :class="['p-4 rounded-xl text-sm font-medium flex items-center gap-3 relative', notification.type === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-red-500/10 border border-red-500/20 text-red-400']">
                <ion-icon :name="notification.type === 'success' ? 'checkmark-circle-outline' : 'alert-circle-outline'"
                  class="text-xl flex-shrink-0"></ion-icon>
                <span>{{ notification.message }}</span>
              </div>
            </transition>

            <div v-for="input in form_inputs" :key="input.id" class="space-y-2 relative">
              <label :for="input.id_input" class="block text-sm font-medium text-gray-300">
                {{ $t(input.title) }}
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                  <ion-icon :name="input.icon" class="text-lg"></ion-icon>
                </div>
                <input v-model="form[input.id_input]" :id="input.id_input" :type="input.type" required
                  class="w-full py-3.5 pl-12 pr-4 text-white transition-all duration-300 rounded-xl bg-neutral-800/50 border border-neutral-700 focus:border-orange-color focus:ring-2 focus:ring-orange-color/20 outline-none placeholder-gray-500" />
              </div>
            </div>

            <div class="space-y-2 relative">
              <label class="block text-sm font-medium text-gray-300">
                {{ $t("contact.messageLabel") }}
              </label>
              <div class="relative">
                <div class="absolute top-4 left-0 flex items-start pl-4 pointer-events-none text-gray-500">
                  <ion-icon name="chatbubble-ellipses-outline" class="text-lg"></ion-icon>
                </div>
                <textarea v-model="form.message" rows="4"
                  class="w-full py-3.5 pl-12 pr-4 text-white transition-all duration-300 rounded-xl bg-neutral-800/50 border border-neutral-700 focus:border-orange-color focus:ring-2 focus:ring-orange-color/20 outline-none placeholder-gray-500 resize-none"></textarea>
              </div>
            </div>

            <button type="submit" :disabled="loading"
              class="relative w-full px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-orange-color to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-color/20 hover:shadow-orange-color/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2">
              <svg v-if="loading" class="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              <span>{{ loading ? 'Enviando...' : $t("contact.sendButton") }}</span>
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
      loading: false,
      notification: {
        show: false,
        type: 'success',
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
          id_input: "name",
          icon: "person-outline"
        },
        {
          id: 2,
          title: "contact.email",
          type: "email",
          id_input: "email",
          icon: "mail-outline"
        },
        {
          id: 3,
          title: "contact.phone",
          type: "text",
          id_input: "phone",
          icon: "call-outline"
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
      this.loading = true
      this.notification.show = false

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
          this.notification = {
            show: true,
            type: 'success',
            message: 'Mensagem enviada com sucesso!'
          }
          this.form = {
            name: '',
            email: '',
            phone: '',
            message: ''
          }
        } else {
          this.notification = {
            show: true,
            type: 'error',
            message: 'Erro ao enviar mensagem. Tente novamente.'
          }
        }
      } catch (error) {
        this.notification = {
          show: true,
          type: 'error',
          message: `Erro: ${error.message}`
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.slide-down-enter-active {
  transition: all 0.4s ease-out;
}
.slide-down-leave-active {
  transition: all 0.3s ease-in;
}
.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
