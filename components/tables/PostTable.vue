<template>
  <div class="card">
    <h2 class="mb-4">📮 Posts</h2>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="py-1 text-left">Title</th>
          <th class="px-6 py-1">Published Date</th>
          <th class="px-6 py-1">Live</th>
          <th class="px-6 py-1 text-left">Tags</th>
          <th class="px-6 py-1"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" :key="index">
          <td class="py-1">
            {{ post.emoji }}&nbsp;<nuxt-link :to="post.slug">{{
              post.title
            }}</nuxt-link>
          </td>
          <td class="px-6 py-1">{{ formatDate(post.publishDate) }}</td>
          <td class="px-6 py-1">{{ post.isPublished ? "✅" : "❌" }}</td>
          <td class="px-6 py-1 flex-meta">
            <span
              v-for="(tag, index) in post.tags"
              :key="index"
              class="pill pill-blue"
            >
              {{ tag }}
            </span>
          </td>
          <td class="px-6 py-1">
            <button><nuxt-link to="/admin/edit">Edit</nuxt-link></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";
import { formatDate } from "@/functions";

const { mapGetters } = createNamespacedHelpers("posts");

export default Vue.extend({
  name: "PostTable",

  methods: {
    formatDate(date: string): string {
      return formatDate(date);
    },
  },

  computed: {
    ...mapGetters({ posts: "publishedPostsMetadata" }),
  },

  beforeCreate() {
    if (this.$store.state.posts.postsMetadata.length === 0) {
      this.$store.dispatch("posts/loadMetadata");
    }
  },
});
</script>
