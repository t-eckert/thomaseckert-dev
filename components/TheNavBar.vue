<template>
  <nav class="p-2 flex justify-between">
    <ul class="flex flex-wrap">
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        {{ crumb.emoji }}
        <nuxt-link :to="crumb.link">{{ crumb.name }}</nuxt-link>
        <span>&#47;</span>
      </li>
    </ul>
    <div v-if="$auth.loggedIn" class="flex content-center">
      <nuxt-link to="/admin" class="no-underline mr-4 pill pill-red">
        Admin
      </nuxt-link>
      <span @click="$auth.logout()" class="cursor-pointer">Log out</span>
    </div>
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
