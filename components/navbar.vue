<template>
  <v-toolbar
    color="#eee"
  >
    <v-toolbar-title>UserApp</v-toolbar-title>


    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text to="/">
        Info
      </v-btn>
    </v-toolbar-items>
    
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="isLoggedIn" @click="logout" text>
        LogOut
      </v-btn>

      <v-btn v-else text to="login">
        LogIn
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('/login');
    }
  }
}
</script>