<template>
    <main class="h-full">
        <nav class="flex items-center h-40 w-full">
            <h1 v-if="userName" class="mr-auto ml-5 h-1/2 px-14 flex items-center text-4xl font-semibold">
                {{ userName }}
            </h1>
            <button @click.prevent="logout" class="ml-auto mr-5 h-1/2 px-14 rounded-md border-black border-solid text-lg font-semibold">Logout</button>
        </nav>
        <div class="flex flex-col justify-center items-center container mx-auto my-40">
            <h1 v-if="userName" class="text-8xl font-bold text-center">
                {{ userName }}
            </h1>
            <p v-if="title" class="text-4xl font-bold my-14 uppercase">
                {{ title }}
            </p>
            <p v-if="shortCV" class="text-3xl text-center mx-20">
                {{ shortCV }}
            </p>
        </div>
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            currentUser: this.user()
        }
    },
    methods: {
        ...mapGetters([
            'user'
        ]),
        ...mapActions([
            'authLogout'
        ]),
        logout() {
            this.authLogout();
            this.$router.push('/login');
        }
    },
    computed: {
        userName() {
            return this.firstName && this.lastName ? `${this.firstName} ${this.lastName}` : undefined;
        },
        firstName() {
            if (this.currentUser.firstName !== '') return this.currentUser.firstName;
            return undefined;
        },
        lastName() {
            if (this.currentUser.lastName !== '') return this.currentUser.lastName;
            return undefined;
        },
        title() {
            if (this.currentUser.title !== '') return this.currentUser.title;
            return undefined;
        },
        shortCV() {
            if (this.currentUser.shortCV !== '') return this.currentUser.shortCV;
            return undefined;
        }
    }
};
</script>