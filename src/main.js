import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './assets/store.js'

Kakao.init('8bc276f430a1baeccc4e933ce4e07819');

createApp(App)
    .use(store)
    .mount('#app')
