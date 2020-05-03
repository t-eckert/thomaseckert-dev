<template>
  <div class="container layout-post">
    <PostView v-if="loadStatus === 'LOADED'" :post="post" />
    <div v-else-if="loadStatus === 'NOT FOUND'">
      <Template404 />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import PostView from "@/components/PostView.vue";
import Template404 from "@/components/templates/Template404.vue";
import { createNamespacedHelpers } from "vuex";
import { Post } from "../interfaces";
import { LoadStatus } from "../constants";

const { mapGetters } = createNamespacedHelpers("posts");

export default Vue.extend({
  components: {
    PostView,
    Template404,
  },

  async asyncData({ params }) {
    const metadata = await axios.get(
      `http://localhost:3000/api/posts/metadata/${params.post}`,
    );
    const content = await axios.get(
      `http://localhost:3000/api/posts/content/${params.post}`,
    );

    const loadStatus = content.data ? LoadStatus.Loaded : LoadStatus.NotFound;

    const post = { metadata: metadata.data, content: content.data };
    return { post, loadStatus };
  },

  data() {
    return {
      post: undefined,
      loadStatus: LoadStatus.Loading,
    };
  },

  methods: {
    setBreadcrumbs(post?: Post) {
      const breadcrumbs = post?.metadata
        ? [
            { emoji: "🏡", name: "Home", link: "/" },
            {
              emoji: post.metadata?.emoji,
              name: post.metadata?.title,
              link: `/${post.metadata?.slug}`,
            },
          ]
        : [{ emoji: "🏡", name: "Home", link: "/" }];
      this.$store.commit("ui/SET_BREADCRUMBS", breadcrumbs);
    },
  },

  mounted() {
    this.setBreadcrumbs(this.post);
  },
});
</script>
