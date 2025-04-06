import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import en from './locales/en.json'
import pt from './locales/pt.json'
import { Carousel, initTWE, Input } from "tw-elements"
import './style.css'

const messages = {
  en,
  pt
}

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'pt',
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App)
app.use(i18n)

app.mixin({
  mounted() {
    initTWE({ Carousel, Input })
  }
})

app.mount('#app')

export default i18n
