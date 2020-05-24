<template>
  <nav class="p-2 flex justify-between">
    <ul class="flex flex-wrap">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="link-display"
      >
        <nuxt-link :to="crumb.link"
          >{{ crumb.emoji }} {{ crumb.name }}</nuxt-link
        >
        <span>&#47;</span>
      </li>
    </ul>
    <div v-if="$auth.loggedIn" class="flex content-center">
      <nuxt-link to="/admin" class="link-display no-underline mr-2 pill-red">
        Admin
      </nuxt-link>
      <span @click="$auth.logout()" class="link-display">Log out</span>
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
