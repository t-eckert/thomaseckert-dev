<template>
  <section>
    <h2>{{ post.emoji }}</h2>
    <h1 class="mb-4">{{ post.title }}</h1>
    <div class="flex-meta mb-4">
      <div>{{ formatDate(post.publishDate) }}</div>
      <div
        v-for="(tag, index) in post.tags"
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
  name: "Post",

  props: {
    post: {
      required: true,
    },
  },

  data() {
    return {
      body: marked(this.post.content)
    }
  },

  methods: {
    formatDate(dateString) {
      return formatDate(dateString);
    },
  },
});
</script>
