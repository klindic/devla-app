import Vuex from 'vuex';
import Vue from 'vue';
import * as authData from '../assets/json/auth.json';

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
            state.user.isLoggedIn = true;
            state.user.firstName = userData.firstName;
            state.user.lastName = userData.lastName;
            state.user.email = userData.email;
        },
        REMOVE_USER(state) {
            state.user.isLoggedIn = false;
            state.user.firstName = '';
            state.user.lastName = '';
            state.user.email = '';
        }
    },
    actions: {
        async authLogin({ commit }, userData) {
            const currentUser = authData.users.find(user => {
                return user.email === userData.email &&
                    user.password === userData.password
            });
            if (currentUser) {
                const userData = {
                    firstName: currentUser.firstName,
                    lastName: currentUser.lastName,
                    email: currentUser.email
                };
                commit('SET_USER', userData);
                return true;
            }
            return false;
        },
        async authLogout({ commit }) {
            /**
             * TODO
             * do logout
             * dispatch REMOVE_USER
             */
        }
    }
});