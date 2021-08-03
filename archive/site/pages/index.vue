<template>
    <div class="container">
        <Introduction />
        <div>
            <strong class="text-secondary">Posts</strong>
            <PostGallery :posts="posts" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { routes } from "~/constants";
import Introduction from "~/components/Introduction.vue";
import PostGallery from "~/components/PostGallery.vue";

export default Vue.extend({
    components: {
        Introduction,
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
