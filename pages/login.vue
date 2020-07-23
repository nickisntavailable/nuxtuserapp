<template>
    <v-container>
        <v-layout>
            <v-flex xs4>
                <v-container style="position: relative;top: 13%;" class="text-xs-center">
                <v-card flat>
                    <v-card-title primary-title>
                    <h4>Login</h4>
                    </v-card-title>
                    <v-form>
                    <v-text-field name="Username" label="Username" v-model="user.login" required></v-text-field>
                    <v-text-field name="Password" label="Password" type="password" v-model="user.password" required></v-text-field>
                    <v-card-actions>
                    <v-btn primary large block @click="login">Login</v-btn>
                    </v-card-actions>
                    </v-form>
                </v-card>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>


export default {
    fetch ({ store }) {
        console.log(store.getters.temp);
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        },
    },
    data() {
        return {
            user: {
                login: '',
                email: ''
            },
            error: null
        }
    },

    methods: {
        login() {
            this.$store.commit('login');
            this.user.email = this.user.login + "@gmail.com";
            this.$store.commit('setUser', this.user);
            this.$router.push('/');
        }
    }
}
</script>