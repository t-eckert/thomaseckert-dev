<template>
  <div class="container">
    <div class="grid grid-cols-4 gg-4 py-4 v-fill">
      <div class="card self-start min-w-full">
        <div class="flex flex-col">
          <label for="title" class="mb-2">Title</label>
          <input
            v-model="post.title"
            type="text"
            name="title"
            id="title"
            class="mb-4"
          />
        </div>
        <div class="flex flex-col">
          <label for="tags" class="mb-2">Tags</label>
          <input
            v-model="post.tags"
            type="text"
            name="tags"
            id="tags"
            class="mb-4"
          />
        </div>
      </div>

      <div class="col-span-2">
        <TheEditor v-model="post.markdown" class="min-h-full" />
      </div>
      <div class="card self-end min-w-full flex flex-col">
        <code class="mb-2"
          >{{ calculateReadingTime(post.markdown) }} minute(s) read</code
        >
        <code class="mb-2">{{ post.markdown.length }} chars</code>
        <div class="mb-4">
          <input
            v-model="post.isPublished"
            type="checkbox"
            name="is-published"
            id="is-published"
          />
          <label for="is-published">Published</label>
        </div>
        <button @click="save()" class="btn-small">Save</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "nuxt-property-decorator";
import axios from "axios";
import { routes } from "~/constants";
import TheEditor from "~/components/TheEditor.vue";
import PostView from "~/components/PostView.vue";

export default Vue.extend({
  middleware: "auth",

  components: {
    TheEditor,
    PostView,
  },

  async asyncData({ params, store }) {
    // Call to the API to get post data
    const { data: post } = await axios.get(routes.POSTS + params.post);

    // Set the navbar breadcrumbs
    store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "🔓", name: "Admin", link: "/admin" },
      {
        emoji: post.emoji,
        name: post.title,
        link: `/admin/edit/${post.slug}`,
      },
    ]);

    // Merge async data into component data
    return {
      post,
    };
  },

  data() {
    return {
      post: undefined,
    };
  },

  methods: {
    save() {
      const post = this.post;
      //this.$axios.post(routes.POSTS);
    },

    calculateReadingTime(text: string): number {
      const wordsPerMinute = 200;
      const numberOfWords = text.split(" ").length;
      return Math.ceil(numberOfWords / wordsPerMinute);
    },
  },
});
</script>
