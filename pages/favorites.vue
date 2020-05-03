<template>
  <div class="container grid g-fit gg-4">
    <Favorite
      v-for="(favorite, index) in favorites"
      :key="index"
      :favorite="favorite"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import Favorite from "@/components/FavoriteView.vue";
import { host, routes } from "@/constants";

export default Vue.extend({
  components: { Favorite },

  async asyncData() {
    const { data: favorites } = await axios.get(host + routes.FAVORITES);
    return {
      favorites,
    };
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "✨", name: "Favorites", link: "/favorites" },
    ]);
  },
});
</script>
