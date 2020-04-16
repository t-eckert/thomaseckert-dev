<template>
  <div class="container layout-post">
    <Post v-if="post" :post="post" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import Post from "@/components/Post.vue";
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("posts");

export default Vue.extend({
  components: {
    Post,
  },

  computed: {
    ...mapGetters({ post: "getCurrent" }),
  },

  watch: {
    post() {
      this.$store.commit("ui/SET_BREADCRUMBS", [
        { emoji: "🏡", name: "Home", link: "/" },
        {
          emoji: this.post.emoji,
          name: this.post.title,
          link: "/",
        },
      ]);
    },
  },

  mounted() {
    const homeBreadcrumb = { emoji: "🏡", name: "Home", link: "/" };
    this.$store.commit("posts/SET_CURRENT", this.$route.params.post);

    if (this.$store.getters["posts/getCurrent"] === undefined) {
      this.$store.dispatch("posts/hydrate");
      this.$store.commit("ui/SET_BREADCRUMBS", [homeBreadcrumb]);
    } else {
      this.$store.commit("ui/SET_BREADCRUMBS", [
        homeBreadcrumb,
        {
          emoji: this.post.emoji,
          name: this.post.title,
          link: "/",
        },
      ]);
    }
  },
});
</script>
