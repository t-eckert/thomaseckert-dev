<template>
    <section>
        <h1>Thomas Eckert</h1>
        <div class="introduction">
            <div class="introduction--links">
                <div class="link-display">
                    <nuxt-link to="/bookmarks">✨ Bookmarks</nuxt-link>
                </div>
            </div>
            <section>
                <p>
                    I am a software engineer on Azure at Microsoft with a
                    background in Nuclear Physics.
                </p>
                <p>
                    You can find me on
                    <a target="_blank" href="https://twitter.com/thomaseckert_"
                        >Twitter</a
                    >,
                    <a target="_blank" href="https://github.com/t-eckert"
                        >GitHub</a
                    >,
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/thomas-eckert/"
                        >LinkedIn</a
                    >, and
                    <a target="_blank" href="https://www.twitch.tv/thomaseckert"
                        >Twitch</a
                    >.
                </p>
            </section>
        </div>
        <hr />
    </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "TheIntroduction",
});
</script>
