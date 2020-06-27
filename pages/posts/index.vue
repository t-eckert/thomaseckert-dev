<template>
  <div class="container flex flex-wrap mt-8">
    <TheIntroduction />
    <ThePostGallery class="mxw-128" :posts="posts" />
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
    const { data: posts } = await axios.get(routes.POSTS);
    return {
      posts,
    };
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
    ]);
  },
});
</script>
