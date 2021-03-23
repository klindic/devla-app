import Vuex from 'vuex';
import Vue from 'vue';
import { users } from '../assets/json/auth.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {
            isLoggedIn: false,
            firstName: '',
            lastName: '',
            email: '',
            title: '',
            shortCV: ''
        }
    },
    getters: {
        isUserLoggedIn: state => {
            return state.user.isLoggedIn;
        },
        user: state => {
            return state.user;
        }
    },
    mutations: {
        SET_USER(state, userData) {
            state.user.isLoggedIn = true;
            state.user.firstName = userData.firstName;
            state.user.lastName = userData.lastName;
            state.user.email = userData.email;
            state.user.title = userData.title;
            state.user.shortCV = userData.shortCV;
        },
        REMOVE_USER(state) {
            state.user.isLoggedIn = false;
            state.user.firstName = '';
            state.user.lastName = '';
            state.user.email = '';
            state.user.title = '';
            state.user.shortCV = '';
        }
    },
    actions: {
        async authLogin({ commit }, userData) {
            const currentUser = users.find(user => {
                return user.email === userData.email &&
                    user.password === userData.password
            });
            if (currentUser) {
                const userData = {
                    firstName: currentUser.firstName,
                    lastName: currentUser.lastName,
                    email: currentUser.email,
                    title: currentUser.title,
                    shortCV: currentUser.shortCV,
                };
                commit('SET_USER', userData);
                return true;
            }
            return false;
        },
        async authLogout({ commit }) {
            commit('REMOVE_USER');
        }
    }
});