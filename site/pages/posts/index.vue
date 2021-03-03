<template>
    <div class="container">
        <h1>Posts</h1>
        <PostGallery :posts="posts" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { routes } from "~/constants";
import PostGallery from "~/components/PostGallery.vue";

export default Vue.extend({
    name: "Posts",

    components: {
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
