<template>
    <article class="container post">
        <section>
            <h1>{{ post.title }}</h1>
            <div class="pills">
                <Pill
                    v-for="(tag, index) in post.tags"
                    :text="tag"
                    :key="index"
                />
            </div>
            <div class="text-secondary">
                {{ calculateReadTime(post.markdown) }} read • Updated
                <DateDisplay :dateString="post.updated" />
            </div>
        </section>

        <section
            class="markdown"
            v-html="formatMarkdown(post.markdown)"
        ></section>

        <script src="/prism.js" />
    </article>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import Pill from "~/components/Pill.vue";
import DateDisplay from "~/components/DateDisplay.vue";
import { routes } from "@/constants";
import { calculateReadTime, formatMarkdown } from "~/functions";

export default Vue.extend({
    name: "Post",

    components: { Pill, DateDisplay },

    async asyncData({ params }) {
        // Call to the API to get post data
        const { data: posts } = await axios.get(routes.POSTS + params.post);
        const post = posts[0];

        if (!post) {
            throw { statusCode: 404 };
        }

        // Merge async data into component data
        return {
            post,
        };
    },

    methods: {
        formatMarkdown(markdown: string): string {
            return formatMarkdown(markdown);
        },
        calculateReadTime(text: string): string {
            return calculateReadTime(text);
        },
    },
});
</script>
