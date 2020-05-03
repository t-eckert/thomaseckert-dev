<template>
  <section>
    <h2>{{ post.metadata.emoji }}</h2>
    <h1 class="mb-4">{{ post.metadata.title }}</h1>
    <div class="flex-meta mb-4">
      <div>{{ formatDate(post.metadata.publishDate) }}</div>
      <div
        v-for="(tag, index) in post.metadata.tags"
        :key="index"
        class="pill pill-blue"
      >
        {{ tag }}
      </div>
    </div>
    <article class="mb-8" v-html="body"></article>
    <hr />
    <script src="/prism.js" />
  </section>
</template>

<script lang="js">
import Vue from "vue";
import { formatDate } from "@/functions";
import marked from "marked";

export default Vue.extend({
  name: "PostView",

  props: {
    post: {
      required: true,
    },
  },

  data() {
    return {
      body: marked(this.post.content.markdown || "")
    }
  },

  methods: {
    formatDate(dateString) {
      return formatDate(dateString);
    },
  },
});
</script>
