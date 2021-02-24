<template>
    <nav>
        <ul>
            <li v-for="navLink in navLinks" :key="navLink" class="link-display">
                <nuxt-link :to="navLink.path">{{ navLink.name }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Navigation",

    data() {
        return {
            navLinks: [
                {
                    name: "Home",
                    path: "/",
                },
                {
                    name: "Writing",
                    path: "/posts",
                },
            ],
        };
    },
});
</script>
