import Vue from 'vue'
import Router from 'vue-router'
import kakaoLogin from '../components/kakaoLogin.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'App',
            component: App
        },
        {
            path: "/kakaoLogin",
            name: "kakaoLogin",
            component: kakaoLogin,
        }
    ]
})