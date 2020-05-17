<template>
  <div class="p-4 grid grid-cols-2 height-fill">
    <div>
      <input
        v-model="post.title"
        type="text"
        name="title"
        id=""
        class="mb-4 mnw-80"
      />
      <MonacoEditor
        class="editor mb-4"
        v-model="post.markdown"
        language="markdown"
        :options="options"
        theme="vs-dark"
      >
      </MonacoEditor>
      <div><button class="btn-small">Save</button></div>
    </div>
    <PostView :post="post" class="scrollable" />
  </div>
</template>

<script lang="js">
import Vue from "vue";
import axios from "axios";
import MonacoEditor from "monaco-editor-vue";
import { routes } from "~/constants";
import TheEditor from "~/components/TheEditor.vue";
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
  }
});
</script>
