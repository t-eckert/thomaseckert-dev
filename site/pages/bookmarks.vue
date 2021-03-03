<template>
    <div class="bookmarks">
        <h1>Bookmarks</h1>
        <p class="text-secondary">
            Some of my favorite things from around the Internet.
        </p>
        <section class="bookmark-categories">
            <BookmarkCategory
                v-for="(category, index) in bookmarks"
                :key="index"
                :category="category"
            />
        </section>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import BookmarkCategory from "~/components/BookmarkCategory.vue";
import { routes } from "~/constants";

export default Vue.extend({
    components: {
        BookmarkCategory,
    },

    async asyncData() {
        const { data: bookmarks } = await axios.get(routes.BOOKMARKS);

        return {
            bookmarks,
        };
    },
});
</script>
