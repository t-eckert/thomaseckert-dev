<template>
  <div>
    <button>Login</button>
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
