import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router'
import { VueFire, VueFireAuth } from "vuefire"
import { app, auth } from "@/config/firebaseConfig"

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoLogoGithub, IoMoon, BiApple, BiDiscord, HiSolidSparkles, BiArrowRightSquareFill, BiChevronDown } from "oh-vue-icons/icons";

import titleMixin from './mixins/titleMixin';
import { store } from './store';


addIcons(IoLogoGithub, IoMoon, BiApple, BiDiscord, HiSolidSparkles, BiArrowRightSquareFill, BiChevronDown);


createApp(App)
  .mixin(titleMixin)
  .use(router)
  .use(store)
  .use(VueFire, {
    firebaseApp: app,
    modules: [
      VueFireAuth(),
    ],
  })
  .component('v-icon', OhVueIcon)
  .mount('#app')
