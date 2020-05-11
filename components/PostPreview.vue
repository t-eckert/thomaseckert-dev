<template>
  <section class="px-4">
    <h3>{{ postMetadata.emoji }}</h3>
    <h2 class="mb-2">
      <nuxt-link :to="'/' + postMetadata.slug">{{
        postMetadata.title
      }}</nuxt-link>
    </h2>
    <div class="flex flex-wrap items-baseline mb-2">
      <div class="mr-4 mb-2">{{ formatDate(postMetadata.publishDate) }}</div>
      <Pill
        v-for="(tag, index) in postMetadata.tags"
        :text="tag"
        :key="index"
        class="mb-2"
      />
    </div>
    <p>{{ postMetadata.preview }}</p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Pill from "~/components/Pill.vue";
import { formatDate } from "@/functions";
import { PostMetadata } from "@/interfaces";

export default Vue.extend({
  name: "PostPreview",

  components: { Pill },

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
