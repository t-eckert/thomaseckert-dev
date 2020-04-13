<template>
  <div class="container">
    <TheEditor />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheEditor from "@/components/TheEditor.vue";

export default Vue.extend({
  name: "TheEditView",

  middleware: ["auth"],

  components: {
    TheEditor,
  },
});
</script>
