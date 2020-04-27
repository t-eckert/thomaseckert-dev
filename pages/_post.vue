<template>
  <div class="container layout-post">
    <p>{{ post }}</p>
    <PostComponent v-if="post.metadata && post.content" :post="post" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import PostComponent from "@/components/Post.vue";
import { createNamespacedHelpers } from "vuex";
import { Post } from "../interfaces";

const { mapGetters } = createNamespacedHelpers("posts");

export default Vue.extend({
  components: {
    PostComponent,
  },

  computed: {
    ...mapGetters({ postGetter: "post" }),
    slug(): string {
      return this.$route.params.post;
    },
    post(): Post {
      return this.postGetter(this.slug);
    },
  },

  watch: {
    post() {
      this.$store.commit("ui/SET_BREADCRUMBS", [
        { emoji: "🏡", name: "Home", link: "/" },
        {
          emoji: this.post?.metadata?.emoji,
          name: this.post?.metadata?.title,
          link: "/",
        },
      ]);
    },
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
    ]);

    const slug = this.slug;
    const post = this.postGetter(slug);

    console.log("post: " + post);

    if (post.metadata === undefined) {
      console.log(post + " metadata undefined");
      this.$store.dispatch("posts/loadMetadata");
    } else {
      this.$store.commit("ui/SET_BREADCRUMBS", [
        { emoji: "🏡", name: "Home", link: "/" },
        {
          emoji: post.metadata.emoji,
          name: post.metadata.title,
          link: "/",
        },
      ]);
    }

    if (post.content === undefined) {
      console.log(post + " content undefined");
      this.$store.dispatch("posts/loadContent", slug);
    }
  },
});
</script>
