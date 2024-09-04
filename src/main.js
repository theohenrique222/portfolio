import { createApp } from 'vue'
import './style.css'
import App from './App.vue'



import { Carousel, initTWE, Input } from "tw-elements";

createApp(App).mount('#app')

export default {
    mounted() {
      initTWE({ Carousel, Input });
    }
  }


