<template>
  <section class="px-4">
    <h3>{{ post.emoji }}</h3>
    <h2 class="mb-2">
      <nuxt-link :to="'/' + post.slug">{{ post.title }}</nuxt-link>
    </h2>
    <div class="flex flex-wrap items-baseline mb-2">
      <div class="mr-4 mb-2">{{ formatDate(post.publishDate) }}</div>
      <Pill
        v-for="(tag, index) in post.tags"
        :text="tag"
        :key="index"
        class="mb-2"
      />
    </div>
    <p>{{ post.preview }}</p>
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
