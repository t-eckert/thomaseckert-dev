<template>
    <article class="container post">
        <section>
            <h2>{{ post.emoji }}</h2>
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
import Pill from "~/components/Pill.vue";
import DateDisplay from "~/components/DateDisplay.vue";
import { calculateReadTime, formatDate, formatMarkdown } from "~/functions";
import { Post } from "../interfaces";

export default Vue.extend({
    name: "PostView",

    components: { Pill, DateDisplay },

    props: {
        post: Object as () => Post,
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
