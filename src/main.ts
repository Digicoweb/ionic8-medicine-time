import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { IonicVue } from '@ionic/vue';
import VWave from "v-wave";
import "./assets/styles/_mixins.scss";
import "./assets/styles/global.scss";
import "./assets/fonts/iranyekan/css/iranyekan.css";
import "./assets/fonts/morabba/css/morabba.css";
import "./assets/fonts/rubik/css/rubik.css";
import "animate.css";
import "aos/dist/aos.css";


const app = createApp(App).use(VWave, { color: "red", initialOpacity: 0.5, easing: "ease-in" }).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
