<template>
  <section class="grid-post">
    <PostPreview v-for="(post, index) in posts" :key="index" :post="post" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
import PostPreview from "@/components/PostPreview.vue";

const { mapGetters } = createNamespacedHelpers("posts");

export default Vue.extend({
  name: "ThePostGallery",

  components: {
    PostPreview,
  },

  computed: {
    ...mapGetters({ posts: "publishedPostsMetadata" }),
  },

  beforeCreate() {
    if (this.$store.state.posts.postsMetadata.length === 0) {
      this.$store.dispatch("posts/loadMetadata");
    }
  },
});
</script>
