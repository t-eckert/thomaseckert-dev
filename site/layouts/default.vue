<template>
    <div>
        <div>
            <Navigation />
            <nuxt />
        </div>
        <TheFooter v-if="shouldHaveFooter()" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "~/components/Navigation.vue";
import TheFooter from "~/components/TheFooter.vue";

export default Vue.extend({
    name: "Default",

    components: {
        Navigation,
        TheFooter,
    },

    data() {
        return { nonContentRoutes: [/login/, /admin\/edit/] };
    },

    methods: {
        shouldHaveFooter(): boolean {
            const route = this.$nuxt.$route.path || "";
            return !this.nonContentRoutes.some((nonContentRoute: RegExp) =>
                nonContentRoute.test(route)
            );
        },
    },
});
</script>
