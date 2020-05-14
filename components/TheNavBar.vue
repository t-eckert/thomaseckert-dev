<template>
  <nav class="p-2">
    <ul class="flex flex-wrap">
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        {{ crumb.emoji }}
        <nuxt-link :to="crumb.link">{{ crumb.name }}</nuxt-link>
        <span>&#47;</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheNavBar",

  computed: {
    breadcrumbs() {
      return this.$store.state.ui.breadcrumbs;
    },
  },
});
</script>
