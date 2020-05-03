<template>
  <div>
    <MonacoEditor
      class="the-editor"
      v-model="value"
      @change="$emit('input', value)"
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

  props: {
    value: ""
  },

  computed: {
    formatted() {
      return marked(this.code)
    }
  }
}
</script>

<style>
.the-editor {
  width: 100%;
  height: 80vh;
}

.monaco-editor,
.overflow-guard {
  border-radius: 0.5rem;
}
</style>
