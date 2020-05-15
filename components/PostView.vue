<template>
  <article class="mt-8">
    <section class="center mxw-160">
      <h2 class="mb-2">{{ post.emoji }}</h2>
      <h1 class="mb-4">{{ post.title }}</h1>
      <div class="flex items-center mb-8">
        <div class="mr-4">{{ formatDate(post.publishDate) }}</div>
        <Pill v-for="(tag, index) in post.tags" :text="tag" :key="index" />
      </div>
    </section>
    <section class="mxw-160 center mb-4 markdown" v-html="body"></section>
    <hr class="mb-4" />
    <div>🏡&nbsp;<nuxt-link to="/">Return home</nuxt-link></div>
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

  data() {
    return {
      body: formatMarkdown(this.post.markdown),
    };
  },

  methods: {
    formatDate(dateString: string): string {
      return formatDate(dateString);
    },
  },
});
</script>
