<template>
  <div class="container">
    <ThePostTable />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ThePostTable from "@/components/ThePostTable.vue";

export default Vue.extend({
  name: "TheAdminView",

  middleware: ["auth"],

  components: {
    ThePostTable,
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "🕶", name: "Admin", link: "/admin" },
    ]);
  },
});
</script>
