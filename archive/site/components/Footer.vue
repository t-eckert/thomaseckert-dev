<template>
    <footer>
        <div v-if="$nuxt.route != ''" class="link-display">
            🏡&nbsp;<nuxt-link to="/">Return home</nuxt-link>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Footer",
});
</script>
