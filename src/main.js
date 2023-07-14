

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';
import AosVue from "aos-vue";

const app = createApp(App)
import {createI18n} from "vue-i18n";
import {uz} from './lang/uz.js'
import {ru} from './lang/ru.js'
import '@splidejs/vue-splide/css';
const messages = {
    uz,ru
}
const i18n = createI18n({
    locale: 'uz',
    fallbackLocale: 'uz',
    messages,

})
app.use(router)
app.use(AosVue)
app.use(VueSplide)
app.use(i18n)
app.mount('#app')
