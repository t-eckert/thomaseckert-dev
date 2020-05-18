<template>
  <div class="p-4">
    <div class="card h-center mb-4">
      <h2 class="mb-4">Posts</h2>
      <ThePostTable class="mb-4" :posts="posts" />
      <button class="btn-small">New post</button>
    </div>
    <div class="card h-center">
      <h2 class="mb-4">Bookmarks</h2>
      <div class="flex">
        <FormAddBookmark class="mr-8" />
        <div>
          <TheBookmarksTable class="mb-4" :bookmarkCategories="bookmarks" />
          <button class="btn-small">New category</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { routes } from "~/constants";
import ThePostTable from "~/components/tables/ThePostTable.vue";
import FormAddBookmark from "~/components/forms/FormAddBookmark.vue";
import TheBookmarksTable from "~/components/tables/TheBookmarksTable.vue";

export default Vue.extend({
  middleware: "auth",

  name: "AdminIndex",

  components: {
    ThePostTable,
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
