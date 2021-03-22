import './assets/css/styles.css'

import Vue from 'vue';
import { router } from './router/router.js';
import { store } from './store/auth.js';

new Vue({
    router,
    store
}).$mount('#app');