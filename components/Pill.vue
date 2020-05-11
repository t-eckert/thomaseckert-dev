<template>
  <div class="mr-2 pill minutae" :class="getPillColorClass(text)">
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getPillColor } from "~/functions";

export default Vue.extend({
  name: "Pill",

  props: {
    text: String,
  },

  methods: {
    getPillColorClass(text: string): string {
      return `pill-${getPillColor(text)}`;
    },
  },
});
</script>
