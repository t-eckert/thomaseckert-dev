<template>
    <section>
        <PostPreview v-for="(post, index) in posts" :key="index" :post="post" />
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import PostPreview from "~/components/PostPreview.vue";
import { Post } from "~/interfaces";

export default Vue.extend({
    name: "PostGallery",

    components: {
        PostPreview,
    },

    props: {
        posts: Array as () => Post[],
    },
});
</script>
