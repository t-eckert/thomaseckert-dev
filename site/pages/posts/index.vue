<template>
    <div class="container flex flex-col my-8 mxw-160">
        <h1 class="mb-2">📎 Posts</h1>
        <hr class="mb-4" />
        <PostGallery class="mxw-128" :posts="posts" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { routes } from "~/constants";
import TheIntroduction from "~/components/TheIntroduction.vue";
import PostGallery from "~/components/PostGallery.vue";

export default Vue.extend({
    name: "Posts",

    components: {
        TheIntroduction,
        PostGallery,
    },

    async asyncData() {
        const { data: posts } = await axios.get(routes.POSTS);

        return {
            posts,
        };
    },
});
</script>
