import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {
            isLoggedIn: false,
            firstName: '',
            lastName: '',
            email: ''
        }
    },
    getters: {
        isUserLoggedIn: state => {
            return state.user.isLoggedIn;
        }
    },
    mutations: {
        SET_USER(state, userData) {
            state.isLoggedIn = true;
            state.firstName = userData.firstName;
            state.lastName = userData.lastName;
            state.email = userData.email;
        },
        REMOVE_USER(state) {
            state.isLoggedIn = false;
            state.firstName = '';
            state.lastName = '';
            state.email = '';
        }
    },
    actions: {
        authLogin({ dispatch }, userData) {
            console.log('login method', userData);
            /**
             * TODO
             * do login
             * dispatch SET_USER
             */
        },
        authLogout({ dispatch }, userData) {
            /**
             * TODO
             * do logout
             * dispatch REMOVE_USER
             */
        }
    }
});