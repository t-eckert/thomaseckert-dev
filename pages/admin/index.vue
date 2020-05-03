<template>
  <div class="container grid gc-3-1 gg-4 grid-start">
    <PostTable :postsMetadata="postsMetadata" />
    <FavoritesTable :favorites="favorites" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { host, routes } from "@/constants";
import PostTable from "@/components/tables/PostTable.vue";
import FavoritesTable from "@/components/tables/FavoritesTable.vue";

export default Vue.extend({
  name: "TheAdminView",

  middleware: ["auth"],

  components: {
    PostTable,
    FavoritesTable,
  },

  async asyncData() {
    const { data: favorites } = await axios.get(host + routes.FAVORITES);
    const { data: postsMetadata } = await axios.get(
      host + routes.POST_METADATA,
    );

    return {
      favorites,
      postsMetadata,
    };
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "⚙", name: "Admin", link: "/admin" },
    ]);
  },
});
</script>
