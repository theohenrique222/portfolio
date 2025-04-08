import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import en from './locales/en.json'
import pt from './locales/pt.json'
import { Carousel, initTWE, Input } from "tw-elements"
import './style.css'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Card from 'primevue/card';
import InputMask from 'primevue/inputmask';
import Image from 'primevue/image';
import Button from 'primevue/button';
import 'primeicons/primeicons.css'
import AnimateOnScroll from 'primevue/animateonscroll';

const messages = {
  en,
  pt
}

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'pt',
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App);
app.use(i18n);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.directive('animateonscroll', AnimateOnScroll);
app.component('InputMask', InputMask)
app.component('Image', Image)
app.component('Card', Card)
app.component('Button', Button)

app.mixin({
  mounted() {
    initTWE({ Carousel, Input })
  }
})

app.mount('#app')

export default i18n
