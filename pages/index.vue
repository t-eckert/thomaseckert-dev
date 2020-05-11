<template>
  <div class="container flex flex-wrap mt-8">
    <TheIntroduction />
    <ThePostGallery :postsMetadata="postsMetadata" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { getHost, routes } from "~/constants";
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
      getHost() + routes.POSTS_METADATA
    );
    return {
      postsMetadata,
    };
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
    ]);
  },
});
</script>
