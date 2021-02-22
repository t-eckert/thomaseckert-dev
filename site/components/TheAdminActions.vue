<template>
    <div>
        <div class="">
            <div
                @click="addBookmarkIsExpanded = !addBookmarkIsExpanded"
                class="link-display w-fit"
            >
                ✨ Add bookmark
            </div>
            <div v-if="addBookmarkIsExpanded" class="card">
                <FormAddBookmark />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import FormAddBookmark from "~/components/forms/FormAddBookmark.vue";

export default Vue.extend({
    name: "TheAdminActions",

    components: { FormAddBookmark },

    data() {
        return {
            addBookmarkIsExpanded: false,
        };
    },
});
</script>
