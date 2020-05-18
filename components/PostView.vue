<template>
  <article>
    <section class="center mxw-160">
      <h2 class="mb-2">{{ post.emoji }}</h2>
      <h1 class="mb-4">{{ post.title }}</h1>
      <div class="flex items-center mb-8">
        <div class="mr-4">{{ formatDate(post.publishDate) }}</div>
        <Pill v-for="(tag, index) in post.tags" :text="tag" :key="index" />
      </div>
    </section>
    <section
      class="mxw-160 center mb-4 markdown"
      v-html="formatMarkdown(post.markdown)"
    ></section>
    <script src="/prism.js" />
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import Pill from "~/components/Pill.vue";
import { formatDate, formatMarkdown } from "~/functions";
import { Post } from "../interfaces";

export default Vue.extend({
  name: "PostView",

  components: { Pill },

  props: {
    post: Object as () => Post,
  },

  methods: {
    formatDate(dateString: string): string {
      return formatDate(dateString);
    },
    formatMarkdown(markdown: string): string {
      return formatMarkdown(markdown);
    },
  },
});
</script>
