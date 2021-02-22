<template>
  <div>
    <div class="container">
      <div class="pt-2 editor-height">
        <TheEditor v-model="post.markdown" class="min-h-full" />
      </div>
    </div>
    <div class="editor-bar flex justify-between align-baseline py-2 px-4">
      <div>
        <code>{{ calculateReadTime(post.markdown) }}</code>
      </div>
      <div>
        <input
          type="text"
          name="emoji"
          class="magic-input-emoji"
          :value="post.emoji"
        />
        <input
          type="text"
          name="title"
          class="magic-input-title mnw-36"
          :value="post.title"
        />
      </div>
      <div><button class="btn-small">Save</button></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "nuxt-property-decorator";
import axios from "axios";
import { routes } from "~/constants";
import TheEditor from "~/components/TheEditor.vue";
import PostView from "~/components/PostView.vue";
import { calculateReadTime } from "~/functions";

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
    calculateReadTime(text: string): string {
      return calculateReadTime(text);
    },
  },
});
</script>
