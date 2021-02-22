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
import { getHost, routes } from "@/constants";
import { calculateReadTime, formatDate, formatMarkdown } from "~/functions";

export default Vue.extend({
    name: "Post",

    components: { Pill, DateDisplay },

    async asyncData({ params, store }) {
        // Call to the API to get post data
        const { data: post } = await axios.get(routes.POSTS + params.post);

        if (!post) {
            throw { statusCode: 404 };
        }

        // Merge async data into component data
        return {
            post,
        };
    },

    methods: {
        formatDate(dateString: string): string {
            return formatDate(dateString);
        },
        formatMarkdown(markdown: string): string {
            return formatMarkdown(markdown);
        },
        calculateReadTime(text: string): string {
            return calculateReadTime(text);
        },
    },
});
</script>
