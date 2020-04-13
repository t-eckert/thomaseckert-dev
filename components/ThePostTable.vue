<template>
  <div>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-1">Title</th>
          <th class="px-4 py-1">Published Date</th>
          <th class="px-4 py-1">Live</th>
          <th class="px-4 py-1">Tags</th>
          <th class="px-4 py-1"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" :key="index">
          <td class="px-4 py-1">{{ post.emoji }}{{ post.title }}</td>
          <td class="px-4 py-1">{{ formatDate(post.publishDate) }}</td>
          <td class="px-4 py-1">{{ post.isPublished }}</td>
          <td class="px-4 py-1">{{ post.tags }}</td>
          <td class="px-4 py-1">
            <nuxt-link to="/admin/edit">edit</nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { formatDate } from "@/functions";

export default Vue.extend({
  name: "ThePostTable",

  methods: {
    formatDate(date: string): string {
      return formatDate(date);
    },
  },

  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },

  beforeCreate() {
    if (this.$store.state.posts.posts.length === 0) {
      this.$store.dispatch("posts/hydrate");
    }
  },
});
</script>
