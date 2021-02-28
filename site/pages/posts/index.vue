<template>
    <div class="container flex flex-col my-8 mxw-160">
        <h1 class="mb-2">📎 Posts</h1>
        <hr class="mb-4" />
        <ThePostGallery class="mxw-128" :posts="posts" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { routes } from "~/constants";
import TheIntroduction from "~/components/TheIntroduction.vue";
import ThePostGallery from "~/components/ThePostGallery.vue";

export default Vue.extend({
    name: "Posts",

    components: {
        TheIntroduction,
        ThePostGallery,
    },

    async asyncData() {
        const { data: posts } = await axios.get(routes.POSTS);

        return {
            posts,
        };
    },
});
</script>
