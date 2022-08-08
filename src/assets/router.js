import { createRouter, createWebHistory } from 'vue-router'
import List from './../components/List.vue'


const routes = [
    {
        path: "/list",
        name: "List",
        component: List,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;