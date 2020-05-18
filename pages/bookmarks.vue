<template>
  <div class="container grid grid-grow gg-4">
    <BookmarkCategory
      v-for="(category, index) in bookmarks"
      :key="index"
      :category="category"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import BookmarkCategory from "~/components/BookmarkCategory.vue";
import { routes } from "~/constants";

export default Vue.extend({
  name: "TheBookmarksPage",

  components: {
    BookmarkCategory,
  },

  async asyncData() {
    const { data: bookmarks } = await axios.get(routes.BOOKMARKS);

    return {
      bookmarks,
    };
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "✨", name: "Bookmarks", link: "/bookmarks" },
    ]);
  },
});
</script>
