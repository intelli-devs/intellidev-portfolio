import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/main.css"
import "./assets/home.css";
import "./assets/css/member.css";

createApp(App).use(store).use(router).mount('#app')
