import '@/assets/scss/index.scss'; // Importa il file SCSS qui
import './assets/main.css' // Importa il file CSS qui

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Pinia -------------------------------
// Router ------------------------------
app.use(createPinia())
app.use(router)

// CALENDAR ----------------------------
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

app.component('VueDatePicker', VueDatePicker);

// AOS
// import 'aos/dist/aos.css'
// import AOS from "aos";
// app.AOS = new AOS.init();

// Naive -------------------------------
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

// i18n -------------------------------
import { createI18n } from 'vue-i18n';

function loadLocaleMessages() {
  const locales = import.meta.globEager('@/locales/*.json');
  const messages = {};
  for (const path in locales) {
    const matched = path.match(/([A-Za-z0-9-_]+)\.json$/i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales[path];
    }
  }
  return messages;
}

export const i18n = createI18n({
  legacy: false,
  locale: 'IT',
  fallbackLocale: 'IT',
  messages: loadLocaleMessages(),
});
app.use(i18n);

// Mount -------------------------------
app.mount('#app')
