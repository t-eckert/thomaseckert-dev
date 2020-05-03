<template>
  <div class="card shadow">
    <h2 class="mb-4">📮 Posts</h2>
    <table class="table-auto mb-8">
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
        <tr v-for="(post, index) in postsMetadata" :key="index">
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
            <nuxt-link class="btn" :to="'/admin/edit/' + post.slug"
              >Edit</nuxt-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <button>New</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { formatDate } from "@/functions";
import { PostMetadata } from "../../interfaces";

export default Vue.extend({
  name: "PostTable",

  props: {
    postsMetadata: Array as () => PostMetadata[],
  },

  methods: {
    formatDate(date: string): string {
      return formatDate(date);
    },
  },
});
</script>
