<template>
  <div class="container grid gc-1-3 gg-8 mt-8">
    <TheIntroduction />
    <ThePostGallery :postsMetadata="postsMetadata" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { host, routes } from "~/constants";
import TheIntroduction from "~/components/TheIntroduction.vue";
import ThePostGallery from "~/components/ThePostGallery.vue";

export default Vue.extend({
  name: "Homepage",

  components: {
    TheIntroduction,
    ThePostGallery,
  },

  async asyncData() {
    const { data: postsMetadata } = await axios.get(
      host + routes.POSTS_METADATA
    );
    return {
      postsMetadata,
    };
  },
});
</script>
