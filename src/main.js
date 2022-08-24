import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store.js'
import Router from './assets/router.js'
import Banner from 'vue-banner-better';

createApp(App)
    .use(store)
    .use(Router)
    .use(Banner)
    .mount('#app')
