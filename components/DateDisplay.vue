<template>
    <span>
        <span @mouseover="fullDate = true" @mouseleave="fullDate = false">
            {{ fullDate ? formatDate(dateString) : commonDate(dateString) }}
        </span>
    </span>
</template>

<script lang="ts">
import Vue from "vue";
import { formatDate, formatTimespan } from "~/functions";

export default Vue.extend({
    name: "DateDisplay",

    props: {
        dateString: {
            type: String,
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
    },
});
</script>
