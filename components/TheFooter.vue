<template>
  <div class="container p-4 shadow-inner mt-8" id="footer">
    <div v-if="$nuxt.route != ''" class="link-display w-fit">
      🏡&nbsp;<nuxt-link to="/">Return home</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheFooter",
});
</script>
