<template>
  <section>
    <h2>{{ favorite.title }}</h2>
    <hr />
    <p class="mt-4 mb-8" v-html="body"></p>
  </section>
</template>

<script>
import marked from "marked";

export default {
  props: {
    favorite: { required: true },
  },

  computed: {
    body() {
      return marked(this.favorite.markdown || "");
    },
  },
};
</script>
