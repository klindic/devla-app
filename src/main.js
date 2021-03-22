import './assets/css/styles.css'

import Vue from 'vue';
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import VueRouter from 'vue-router';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueRouter)
new Vue({
    router
}).$mount('#app');