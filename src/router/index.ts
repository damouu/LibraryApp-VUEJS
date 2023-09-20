import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataView from "@/components/DataView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
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
        }
    ]
})

export default router
