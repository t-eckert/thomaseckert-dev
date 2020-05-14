<template>
  <div class="container">
    <div class="card mxw-88 mt-64 h-center flex justify-around">
      <button @click="login()">🔒&nbsp;Login</button>
      <nuxt-link class="btn btn-transparent" to="/">
        🏡&nbsp;Return home
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LoginPage",

  methods: {
    login() {
      // @ts-ignore auth only exists on the object at runtime
      this.$auth.loginWith("auth0");
    },
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "🔑", name: "Login", link: "/login" },
    ]);
  },
});
</script>
