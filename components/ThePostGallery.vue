<template>
  <section class="grid g-fit gg-4">
    <PostPreview
      v-for="(postMetadata, index) in postsMetadata"
      :key="index"
      :postMetadata="postMetadata"
    />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import PostPreview from "@/components/PostPreview.vue";
import { Post, PostMetadata } from "@/interfaces";

export default Vue.extend({
  name: "ThePostGallery",

  components: {
    PostPreview,
  },

  props: {
    postsMetadata: Array as () => PostMetadata[],
  },
});
</script>
