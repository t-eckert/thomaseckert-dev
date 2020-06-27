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
    <div class="text-secondary">
      {{ calculateReadTime(post.markdown) }} read • Updated
      <DateDisplay :dateString="post.updated" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Pill from "~/components/Pill.vue";
import DateDisplay from "~/components/DateDisplay.vue";
import { calculateReadTime, formatDate, formatTimespan } from "~/functions";
import { Post } from "~/interfaces";

export default Vue.extend({
  name: "PostPreview",

  components: {
    Pill,
    DateDisplay,
  },

  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },

  data() {
    return { fullDate: false };
  },

  methods: {
    formatDate(dateString: string): string {
      return formatDate(dateString);
    },
    commonDate(dateString: string): string {
      return formatTimespan(new Date(dateString));
    },
    calculateReadTime(text: string): string {
      return calculateReadTime(text);
    },
  },
});
</script>
