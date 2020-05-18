<template>
  <section>
    <h2 @click="isExpanded = !isExpanded" class="cursor-pointer">
      {{ category.name }}
    </h2>
    <hr class="mb-4" />
    <ul v-if="isExpanded">
      <li
        v-for="(bookmark, index) in category.bookmarks"
        :key="index"
        class="mb-2"
      >
        <a target="_blank" :href="bookmark.link">{{ bookmark.linkText }}</a
        ><span v-if="bookmark.description"
          >:&nbsp;{{ bookmark.description }}</span
        >
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { BookmarkCategory, Bookmark } from "~/interfaces";

export default Vue.extend({
  name: "BookmarkCategory",

  props: {
    category: Object as () => BookmarkCategory,
  },

  data() {
    return {
      isExpanded: true,
    };
  },
});
</script>
