<template>
    <main class="flex justify-center h-screen items-center flex-col">
        <h1 class="text-2xl -mt-10 mb-10">
            Enter your credentials
        </h1>
        <form
        id="login"
        @submit.prevent="validate($event)"
        class="max-w-sm w-full h-64 justify-center bg-white shadow-md rounded-lg overflow-hidden mx-auto flex flex-col p-5">
            <Input id="email" label="Email" type="text"></Input>
            <div v-if="errorMessage('email')" class="-mt-4 mb-3 text-sm text-red-600">
                {{ errorMessage('email') }}
            </div>
            <Input id="password" label="Password" type="password"></Input>
            <div v-if="errorMessage('password')" class="-mt-4 mb-3 text-sm text-red-600">
                {{ errorMessage('password') }}
            </div>
            <Button type="submit">Login</Button>
        </form>
    </main>
</template>

<script>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import { mapActions } from 'vuex';
import { isEmailValid } from '../utils/validation.js';

export default {
    components: {
        Input,
        Button
    },
    data() {
        return {
            errors: []
        }
    },
    methods: {
        ...mapActions([
            'authLogin'
        ]),
        async validate(event) {
            const email = this.findFormElem(event, 'email').trim();
            const password = this.findFormElem(event, 'password').trim();
            if(this.isValid({email, password})) {
                const userAuthenticated = await this.authLogin({email, password});
                if (userAuthenticated) {this.$router.push('/')}
            }
        },
        findFormElem(event, name) {
            const formArray = Array.from(event.target);
            let value = '';
            if (formArray && formArray.length) {
                const inputElem = formArray.find(elem => elem.name === name);
                value = inputElem ? inputElem.value : '';
            }
            return value;
        },
        isValid(userData) {
            this.errors = [];
            if (!userData.email) {
                this.errors.push({ field: 'email', message: 'Email is required.'});
            } else if (!isEmailValid(userData.email)) {
                this.errors.push({ field: 'email', message: 'Email is not valid.'})
            };
            if (!userData.password) {
                this.errors.push({ field: 'password', message: 'Password is required.'});
            };
            return !Boolean(this.errors.length);
        },
        errorMessage(fieldName) {
            const error = this.errors.find(error => error.field === fieldName);
            if (error) return error.message;
        }
    }
};
</script>