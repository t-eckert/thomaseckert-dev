<template>
  <section class="container grid-home section-home">
    <TheIntroduction />
    <ThePostGallery />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import TheIntroduction from "@/components/TheIntroduction.vue";
import ThePostGallery from "@/components/ThePostGallery.vue";

export default Vue.extend({
  components: { TheIntroduction, ThePostGallery },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
    ]);
  },
});
</script>
