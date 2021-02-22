<template>
    <section class="flex flex-col">
        <PostPreview
            v-for="(post, index) in posts"
            :key="index"
            :post="post"
            class="mb-6"
        />
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import PostPreview from "~/components/PostPreview.vue";
import { Post } from "~/interfaces";

export default Vue.extend({
    name: "ThePostGallery",

    components: {
        PostPreview,
    },

    props: {
        posts: Array as () => Post[],
    },
});
</script>
