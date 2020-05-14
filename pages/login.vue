<template>
  <div class="container">
    <div class="card mxw-88 mt-64 h-center flex justify-around">
      <button>🔒&nbsp;Login</button>
      <nuxt-link class="btn btn-transparent" to="/"
        >🏡&nbsp;Return home</nuxt-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LoginPage",

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "🔑", name: "Login", link: "/login" },
    ]);
  },
});
</script>
