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
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="post.markdown"
        ></textarea>

        <!-- <MonacoEditor
          class="editor"
          v-model="post.markdown"
          language="markdown"
          :options="options"
          theme="vs-dark"
        >
        </MonacoEditor> -->
      </div>
      <div class="card self-end min-w-full">
        <div class="flex flex-col">
          <code class="mb-2"
            >{{ calculateReadingTime(post.markdown) }} minute(s) read</code
          >
          <code class="mb-4">{{ post.markdown.length }} chars</code>
        </div>
        <button class="btn-small">Save</button>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from "vue";
import axios from "axios";
import MonacoEditor from "monaco-editor-vue";
import { routes } from "~/constants";
import PostView from "~/components/PostView.vue";

export default Vue.extend({
  middleware: "auth",

  components: {
    MonacoEditor,
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
      options: {
        fontSize: 14,
        autoIndent: 2,
        highlightActiveIndentGuide: true,
        lineNumbersMinChars: 3,
        formatOnPaste: true,
        formateOnType: true,
        fontFamily: "Cascadia Code, monospace, Consolas, Courier New",
        fontLigatures: true,
        minimap: {
          enabled: true,
        },
        overviewRulerBorder: false,
        renderWhitespace: "boundary",
        scrollBeyondLastLine: false,
        wordWrap: "on",
        wrappingIndent: "same",
        renderLineHighlight: "gutter",
      }
    }
  },

  methods: {
    calculateReadingTime(text) {
      const wordsPerMinute = 200;
      const numberOfWords = text.split(" ").length;
      return Math.ceil(numberOfWords/wordsPerMinute);
    }
  }
});
</script>
