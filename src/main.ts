import { createApp } from 'vue'
import '@/style.css'
import 'v-calendar/dist/style.css'
import App from '@/App.vue'
import router from '@/router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoLogoGithub, IoMoon } from "oh-vue-icons/icons";

import VCalendar from 'v-calendar';

addIcons(IoLogoGithub, IoMoon);

createApp(App)
  .use(router)
  .use(VCalendar)
  .component('v-icon', OhVueIcon)
  .mount('#app')
