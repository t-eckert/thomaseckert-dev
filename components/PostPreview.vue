<template>
  <section>
    <h3>{{ postMetadata.emoji }}</h3>
    <h2 class="mb-2">
      <nuxt-link :to="'/' + postMetadata.slug">{{
        postMetadata.title
      }}</nuxt-link>
    </h2>
    <div class="flex mb-2">
      <div class="mr-2">{{ formatDate(postMetadata.publishDate) }}</div>
      <div
        v-for="(tag, index) in postMetadata.tags"
        :key="index"
        class="mr-2 pill pill-blue"
      >
        {{ tag }}
      </div>
    </div>
    <p>{{ postMetadata.preview }}</p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { formatDate } from "@/functions";
import { PostMetadata } from "@/interfaces";

export default Vue.extend({
  name: "PostPreview",

  props: {
    postMetadata: {
      type: Object as () => PostMetadata,
      required: true,
    },
  },

  methods: {
    formatDate(dateString: string): string {
      return formatDate(dateString);
    },
  },
});
</script>
