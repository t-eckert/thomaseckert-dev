<template>
    <div :class="getPillColorClass(text)" class="pill minutae">
        {{ text }}
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getPillColor } from "~/functions";

export default Vue.extend({
    name: "Pill",

    props: {
        text: String,
    },

    methods: {
        getPillColorClass(text: string): string {
            return `pill-${getPillColor(text)}`;
        },
    },
});
</script>
