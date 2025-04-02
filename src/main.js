import { createApp } from 'vue'
import './style.css'
import { createI18n } from 'vue-i18n';
import App from './App.vue'

import en from './locales/en.json';
import pt from './locales/pt.json';

import { Carousel, initTWE, Input } from "tw-elements";

const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  messages: { en, pt }
});

const app = createApp(App);
app.use(i18n);

app.mixin({
  mounted() {
    initTWE({ Carousel, Input });
  }
});

app.mount('#app');
