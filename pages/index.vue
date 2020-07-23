<template>
  <v-layout column>
      <v-card>
          <v-card-text>
              <v-flex>
                  <v-avatar size="96" class="mr-4">
                      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Avatar">
                  </v-avatar>
                  <v-card-title>
                    Login: {{user.login}}
                  </v-card-title>
                  <v-card-subtitle>
                    Email: {{user.email}}
                  </v-card-subtitle>
              </v-flex>
          </v-card-text>
      </v-card>
  </v-layout>
</template>

<script>


export default {
  
  computed: {
    user () {
      return this.$store.getters.user;
    }
  },
  middleware ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.isLoggedIn) {
      return redirect('/login')
    }
  }
}
</script>
