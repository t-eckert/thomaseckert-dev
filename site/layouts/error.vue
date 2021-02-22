<template>
  <div class="container h-center">
    <div v-if="error.statusCode === 404" class="mt-4 mb-8">
      <h1 class="text-center display-1 shiny">404</h1>
    </div>
    <div v-else class="mt-16 mb-8">
      <h1 class="text-center">An error occurred</h1>
    </div>
    <div class="text-center mb-6">It's going to be ok.</div>
    <div class="link-display h-center w-fit">
      <nuxt-link to="/">🏡 Return home</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: { error: Object },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
    ]);
  },
});
</script>
