<template>
    <main class="h-full">
        <Navigation/>
        <Content/>
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Navigation from '../components/Navigation.vue'
import Content from '../components/Content.vue'

export default {
    data() {
        return {
            currentUser: this.user()
        }
    },
    components: {
        Navigation,
        Content
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