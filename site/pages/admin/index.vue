<template>
  <div class="container">
    <div class="grid grid-cols-4 gg-4 mt-4 h-center items-start">
      <div class="col-span-3">
        <h3 class="mb-4">📮 Posts</h3>
        <ThePostTable class="mb-4" :posts="posts" />
        <button class="btn-small">New post</button>
      </div>
      <TheAdminActions class="col-span-1" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { routes } from "~/constants";
import ThePostTable from "~/components/tables/ThePostTable.vue";
import TheAdminActions from "~/components/TheAdminActions.vue";
import FormAddBookmark from "~/components/forms/FormAddBookmark.vue";
import TheBookmarksTable from "~/components/tables/TheBookmarksTable.vue";

export default Vue.extend({
  middleware: "auth",

  name: "AdminIndex",

  components: {
    ThePostTable,
    TheAdminActions,
    FormAddBookmark,
    TheBookmarksTable,
  },

  async asyncData() {
    const { data: posts } = await axios.get(routes.POSTS);
    const { data: bookmarks } = await axios.get(routes.BOOKMARKS);
    return {
      posts,
      bookmarks,
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
