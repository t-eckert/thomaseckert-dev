<template>
  <article class="mt-8">
    <section class="center mxw-128">
      <h2 class="mb-2">{{ postMetadata.emoji }}</h2>
      <h1 class="mb-4">{{ postMetadata.title }}</h1>
      <div class="flex items-center mb-8">
        <div class="mr-4">{{ formatDate(postMetadata.publishDate) }}</div>
        <Pill
          v-for="(tag, index) in postMetadata.tags"
          :text="tag"
          :key="index"
        />
      </div>
    </section>
    <section class="mxw-128 center mb-4" v-html="body"></section>
    <hr class="mb-4" />
    <div>🏡&nbsp;<nuxt-link to="/">Return home</nuxt-link></div>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import Pill from "~/components/Pill.vue";
import { formatDate, formatMarkdown } from "~/functions";
import { PostMetadata, PostContent } from "~/interfaces";

export default Vue.extend({
  name: "PostView",

  components: { Pill },

  props: {
    postMetadata: Object as () => PostMetadata,
    postContent: Object as () => PostContent,
  },

  data() {
    return {
      body: formatMarkdown(this.postContent.markdown),
    };
  },

  methods: {
    formatDate(dateString: string): string {
      return formatDate(dateString);
    },
  },
});
</script>
