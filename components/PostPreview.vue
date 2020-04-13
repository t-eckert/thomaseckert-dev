<template>
  <section>
    <h3>{{ post.emoji }}</h3>
    <h2 class="mb-2">
      <nuxt-link to="/">{{ post.title }}</nuxt-link>
    </h2>
    <div class="flex-meta mb-2">
      <div>{{ formatDate(post.publishDate) }}</div>
      <div
        v-for="(tag, index) in post.tags"
        :key="index"
        class="pill pill-blue"
      >
        {{ tag }}
      </div>
    </div>
    <p>{{ post.preview }}</p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Post from "@/interfaces/Post";
import { formatDate } from "@/functions";

export default Vue.extend({
  name: "PostPreview",

  props: {
    post: {
      type: Object as () => Post,
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
