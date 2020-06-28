<template>
  <section class="container p-4">
    <PostView :post="post" class="mt-8" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import PostView from "~/components/PostView.vue";
import { getHost, routes } from "@/constants";

export default Vue.extend({
  name: "ThePostRoute",

  components: {
    PostView,
  },

  async asyncData({ params, store }) {
    // Call to the API to get post data

    const { data: post } = await axios.get(routes.POSTS + params.post);

    if (!post) {
      throw { statusCode: 404 };
    }

    // Set the navbar breadcrumbs
    store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      {
        emoji: post.emoji,
        name: post.title,
        link: `/${post.slug}`,
      },
    ]);

    // Merge async data into component data
    return {
      post,
    };
  },
});
</script>
