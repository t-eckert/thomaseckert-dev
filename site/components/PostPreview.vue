<template>
    <section class="post-preview">
        <h3>
            <nuxt-link :to="'/posts/' + post.slug" class="post-preview--title">
                {{ post.title }}
            </nuxt-link>
        </h3>
        <div class="pills">
            <Pill v-for="(tag, index) in post.tags" :text="tag" :key="index" />
        </div>
        <div>{{ post.preview }}</div>
        <div class="text-secondary">
            {{ calculateReadTime(post.markdown) }} read • Updated
            <DateDisplay :dateString="post.updated" />
        </div>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import Pill from "~/components/Pill.vue";
import DateDisplay from "~/components/DateDisplay.vue";
import { calculateReadTime, formatDate, formatTimespan } from "~/functions";
import { Post } from "~/interfaces";

export default Vue.extend({
    name: "PostPreview",

    components: {
        Pill,
        DateDisplay,
    },

    props: {
        post: {
            type: Object as () => Post,
            required: true,
        },
    },

    data() {
        return { fullDate: false };
    },

    methods: {
        formatDate(dateString: string): string {
            return formatDate(dateString);
        },
        commonDate(dateString: string): string {
            return formatTimespan(new Date(dateString));
        },
        calculateReadTime(text: string): string {
            return calculateReadTime(text);
        },
    },
});
</script>
