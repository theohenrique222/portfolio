<template>
  <section 
    class="bg-neutral-900" 
    id="contato"
    >
    <main 
      class="grid items-center max-w-6xl gap-6 px-10 py-10 m-auto lg:px-0 lg:grid-cols-2" 
      id="contact"
      >
      <div 
        data-aos="fade-up" 
        data-aos-duration="1000" 
        class="contact-text"
        >
        
        <h2 
          class="text-4xl font-extrabold text-white md:text-5xl"
          >
          {{ $t("contact.title") }}<span class="text-orange-color">{{ $t("contact.me") }}</span>
        </h2>
        
        <h4 
          class="my-4 text-xl font-bold text-white"
          >
          {{ $t(title) }}
        </h4>

        <p class="mb-4 text-lg leading-8 text-gray-100 font-extralight"
        >
          {{ $t(content) }}
          <br />
          <span class="text-xl font-semibold text-orange-color">{{ $t(subTitle) }}</span>
        </p>

        <div 
          class="text-white mb-7"
          >
          <li 
            class="mb-3 list-none"
            >
            <a 
              v-for="social in social_icons" 
              :key="social.id"
              class="flex items-center text-base transition-all duration-300 hover:translate-x-2 hover:text-orange-color"
              :href="social.href" 
              target="_blank"
              >
              <ion-icon 
                :name=social.name 
                class="px-3"
                >
                </ion-icon>
                {{ social.content}}
              </a>
          </li>
        </div>
      </div>

      <div 
        data-aos="fade-up" 
        data-aos-duration="1000" 
        class="contact-form"
        >
        <form 
        @submit.prevent="sendMessage"
        >
          <div 
            v-for="input in form_inputs" 
            :key="input.id" 
            class="relative mb-3 space-y-1"
            >
            <label 
              :for="input.id_input" 
              class="text-white"
              >
              {{ $t(input.title) }}
            </label>

            <input
              v-model="form[input.id_input]"
              :id="input.id_input"
              :type="input.type"
              required
              class="block w-full p-3 text-white rounded outline-none bg-neutral-800"
            />
          </div>

          <div 
            class="relative mb-3 space-y-1"
            >
            <label 
              class="text-white">
              {{ $t("contact.messageLabel") }}
            </label>

            <textarea
              v-model="form.message"
              rows="3"
              class="block w-full p-3 text-white rounded resize-none h-60 bg-neutral-800"
              >
            </textarea>
          </div>

          <button
            type="submit"
            class="inline-block w-full p-4 px-10 text-white rounded-md bg-orange-color"
          >
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
          type: "number", 
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

<style>
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
