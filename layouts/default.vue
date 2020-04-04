<template>
  <div><TheNavBar /> <nuxt /></div>
</template>

<script lang="ts">
import Vue from "vue"
import TheNavBar from "@/components/TheNavBar.vue"

export default Vue.extend({
  name: "TheDefaultView",

  components: { TheNavBar }
})
</script>
