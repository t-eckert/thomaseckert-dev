<template>
  <div>
    <input
      class="mb-4 px-2 py-1 max-width"
      type="text"
      name=""
      id=""
      placeholder="Title"
    />

    <MonacoEditor
      class="editor"
      v-model="code"
      language="markdown"
      :options="options"
      theme="vs-dark"
    ></MonacoEditor>
  </div>
</template>

<script lang="js">
import MonacoEditor from "vue-monaco"
import marked from "marked"

export default {
  components: {
    MonacoEditor
  },

  data() {
    return {
      code: ''
    }
  },

  computed: {
    formatted() {
      return marked(this.code)
    }
  }
}
</script>

<style>
.editor {
  width: 100%;
  height: 90vh;
  border-radius: 0.5rem;
}
</style>
