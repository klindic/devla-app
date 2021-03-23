<template>
    <main class="flex justify-center h-screen items-center">
        <form
        id="login"
        @submit.prevent="validate($event)"
        class="max-w-sm w-full h-64 justify-center bg-white shadow-md rounded-lg overflow-hidden mx-auto flex flex-col p-5">
            <Input id="email" label="Email" type="text"></Input>
            <Input id="pass" label="Password" type="password"></Input>
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
            errorMessages: []
        }
    },
    methods: {
        ...mapActions([
            'authLogin'
        ]),
        async validate(event) {
            const email = this.findFormElem(event, 'email');
            const password = this.findFormElem(event, 'pass');
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
            this.errorMessages = [];
            if (!userData.email) {
                this.errorMessages.push('Email is required.');
            } else if (!isEmailValid(userData.email)) {
                this.errorMessages.push('Email is not valid.')
            };
            if (!userData.password) {
                this.errorMessages.push('Password is required.');
            };
            return !Boolean(this.errorMessages.length);
        }
    }
};
</script>

<style>
label {
  top: 0%;
  transform: translateY(-50%);
  font-size: 11px;
  color: rgba(37, 99, 235, 1);
}

.empty input:not(:focus) + label {
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
}

input:not(:focus) + label {
  color: rgba(70, 70, 70, 1);
}

input {
  border-width: 1px;
}

input:focus {
  outline: none;
  border-color: rgba(37, 99, 235, 1);
}
</style>