<template>
  <section>
    <h3 @click="isExpanded = !isExpanded" class="cursor-pointer mb-2">
      {{ category.name }}
    </h3>
    <hr class="mb-2" />
    <div v-if="isExpanded">
      <div
        v-for="(bookmark, index) in category.bookmarks"
        :key="index"
        class="link-display mb-2"
      >
        <a target="_blank" :href="bookmark.link"
          >{{ bookmark.linkText
          }}<span v-if="bookmark.description"
            >:&nbsp;{{ bookmark.description }}</span
          ></a
        >
      </div>
    </div>
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
