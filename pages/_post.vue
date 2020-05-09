<template>
  <section>
    <pre>
      {{ postMetadata }}
    </pre>
    <pre>
      {{ postContent }}
    </pre>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { getHost, routes } from "@/constants";

export default Vue.extend({
  name: "ThePostRoute",

  async asyncData({ params }) {
    const { data: postMetadata } = await axios.get(
      getHost() + routes.POSTS_METADATA + params.post
    );
    const { data: postContent } = await axios.get(
      getHost() + routes.POSTS_CONTENT + params.post
    );
    return {
      postMetadata,
      postContent,
    };
  },
});
</script>
