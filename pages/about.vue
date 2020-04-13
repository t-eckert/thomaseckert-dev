<template>
  <div class="container">
    About
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "💁‍♂️", name: "About", link: "/about" },
    ]);
  },
});
</script>
