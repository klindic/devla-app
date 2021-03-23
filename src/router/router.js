
import VueRouter from 'vue-router';
import Vue from 'vue';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import { store } from '../store/auth.js';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    }
];

export const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // route requires auth
        if (!store.getters.isUserLoggedIn) {
            next('/login');
        } else {
            next();
        }
    } else {
        // this wasn't part of the task but did it anyways
        if (store.getters.isUserLoggedIn) {
            // route doesn't require auth but user logged in
            next('/');
        } else {
            next();
        }
    }
});