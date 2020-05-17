<template>
  <div class="p-4">
    <div class="card h-center">
      <h2 class="mb-4">Posts</h2>
      <ThePostTable class="mb-4" :posts="posts" />
      <button class="btn-small">New post</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { routes } from "~/constants";
import ThePostTable from "~/components/tables/ThePostTable.vue";

export default Vue.extend({
  middleware: "auth",

  name: "AdminIndex",

  components: {
    ThePostTable,
  },

  async asyncData() {
    const { data: posts } = await axios.get(routes.POSTS);
    return {
      posts,
    };
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "🔓", name: "Admin", link: "/admin" },
    ]);
  },
});
</script>
