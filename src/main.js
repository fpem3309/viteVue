import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './assets/store.js'
import Router from './assets/router.js'


createApp(App)
    .use(store)
    .use(Router)
    .mount('#app')
