<template>
  <div>Admin</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AdminIndex",

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "🔓", name: "Admin", link: "/admin" },
    ]);
  },
});
</script>
