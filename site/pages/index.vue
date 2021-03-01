<template>
    <div class="container">
        <TheIntroduction />
        <PostGallery :posts="posts" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { routes } from "~/constants";
import TheIntroduction from "~/components/TheIntroduction.vue";
import PostGallery from "~/components/PostGallery.vue";

export default Vue.extend({
    name: "Homepage",

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
