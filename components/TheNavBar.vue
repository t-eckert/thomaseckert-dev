<template>
  <ul class="breadcrumbs">
    <li v-for="(crumb, index) in breadcrumbs" :key="index">
      {{ crumb.emoji }}
      <nuxt-link :to="crumb.link" class="breadcrumb-link">{{
        crumb.name
      }}</nuxt-link>
      <span class="breadcrumb-divider">&#47;</span>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { uiStore } from "@/store";

export default Vue.extend({
  name: "TheNavBar",

  computed: {
    breadcrumbs() {
      return uiStore.breadcrumbs;
    }
  }
});
</script>
