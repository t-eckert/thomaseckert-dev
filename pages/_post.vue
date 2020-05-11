<template>
  <section class="container p-4">
    <PostView :postMetadata="postMetadata" :postContent="postContent" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import PostView from "~/components/PostView.vue";
import { getHost, routes } from "@/constants";
import { PostMetadata } from "../interfaces";

export default Vue.extend({
  name: "ThePostRoute",

  components: {
    PostView,
  },

  async asyncData({ params, store }) {
    // Call to the API to get post data
    const { data: postMetadata } = await axios.get(
      getHost() + routes.POSTS_METADATA + params.post
    );
    const { data: postContent } = await axios.get(
      getHost() + routes.POSTS_CONTENT + params.post
    );

    // Set the navbar breadcrumbs
    store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      {
        emoji: postMetadata.emoji,
        name: postMetadata.title,
        link: `/${postMetadata.slug}`,
      },
    ]);

    // Merge async data into component data
    return {
      postMetadata,
      postContent,
    };
  },
});
</script>
