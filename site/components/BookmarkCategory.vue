<template>
    <section>
        <h2 @click="isExpanded = !isExpanded" class="cursor-pointer">
            {{ category.name }}
        </h2>

        <hr />

        <div v-if="isExpanded">
            <div
                v-for="(bookmark, index) in category.bookmarks"
                :key="index"
                class="link-display bookmark"
            >
                <a :href="bookmark.link" target="_blank">
                    {{ bookmark.linkText }}
                    <span v-if="bookmark.description">
                        {{ bookmark.description }}
                    </span>
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { BookmarkCategory } from "~/interfaces";

export default Vue.extend({
    name: "BookmarkCategory",

    props: {
        category: Object as () => BookmarkCategory,
    },

    data() {
        return {
            isExpanded: true,
        };
    },
});
</script>
