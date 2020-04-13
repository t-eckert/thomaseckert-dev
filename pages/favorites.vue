<template>
  <div class="container">
    Favorites
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "✨", name: "Favorites", link: "/favorites" },
    ]);
  },
});
</script>
