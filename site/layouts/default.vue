<template>
    <div>
        <Navigation />
        <nuxt />
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "~/components/Navigation.vue";
import Footer from "~/components/Footer.vue";

export default Vue.extend({
    name: "Default",

    components: {
        Navigation,
        Footer,
    },
});
</script>
