<template>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Published Date</th>
        <th>Tags</th>
        <th class="borderless"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(post, index) in posts" :key="index">
        <td class="link-display">
          <nuxt-link :to="`/${post.slug}`">
            {{ post.emoji }}&nbsp;{{ post.title }}
          </nuxt-link>
        </td>
        <td>
          {{ formatDate(post.publishDate) }}
        </td>
        <td class="flex flex-wrap">
          <Pill
            v-for="(tag, index) in post.tags"
            :text="tag"
            :key="index"
            class="my-1"
          />
        </td>
        <td class="borderless">
          <nuxt-link :to="`/admin/edit/${post.slug}`" class="btn btn-small">
            Edit
          </nuxt-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from "vue";
import { formatDate } from "~/functions";
import { Post } from "~/interfaces";
import Pill from "~/components/Pill.vue";

export default Vue.extend({
  name: "ThePostTable",

  components: {
    Pill,
  },

  props: {
    posts: Array as () => Post[],
  },

  methods: {
    formatDate(dateString: string): string {
      return formatDate(dateString);
    },
  },
});
</script>
