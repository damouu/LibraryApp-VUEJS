import './assets/main.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import instance from "@/plugins/axios";


const app = createApp(App).use(router, createPinia());
app.provide('axios', instance);
app.mount('#app')
