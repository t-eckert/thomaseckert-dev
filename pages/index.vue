<template>
  <section class="container grid-home section-home">
    <TheIntroduction />
    <ThePostGallery :postsMetadata="postsMetadata" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { host, routes } from "@/constants/";
import TheIntroduction from "@/components/TheIntroduction.vue";
import ThePostGallery from "@/components/ThePostGallery.vue";

export default Vue.extend({
  components: { TheIntroduction, ThePostGallery },

  /** Resolves a list of post metadata from the database */
  async asyncData() {
    const { data } = await axios.get(host + routes.POST_METADATA);
    return { postsMetadata: data };
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
    ]);
  },
});
</script>
