<template>
  <section class="px-4 mb-4">
    <h3>{{ post.emoji }}</h3>
    <h3 class="mb-2">
      <nuxt-link :to="'/' + post.slug" class="no-underline">{{
        post.title
      }}</nuxt-link>
    </h3>
    <div class="flex flex-wrap items-baseline">
      <Pill
        v-for="(tag, index) in post.tags"
        :text="tag"
        :key="index"
        class="mb-2"
      />
    </div>
    <div>{{ post.preview }}</div>
    <div class="text-secondary">Updated {{ formatDate(post.publishDate) }}</div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Pill from "~/components/Pill.vue";
import { formatDate } from "~/functions";
import { Post } from "~/interfaces";

export default Vue.extend({
  name: "PostPreview",

  components: { Pill },

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
