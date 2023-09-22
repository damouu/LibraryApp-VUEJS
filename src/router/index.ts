import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataView from "@/components/DataView.vue";
import NewsView from "@/views/NewsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/student',
            name: 'student',
            component: () => import('../views/StudentView.vue')
        },
        {
            path: '/printData/:uuid',
            name: 'printData',
            component: DataView,
            props: true,
        },
        {
            path: '/book',
            name: 'book',
            component: NewsView,
            props: true,
        }
    ]
})

export default router
