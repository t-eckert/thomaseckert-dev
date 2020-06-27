<template>
  <section class="px-4">
    <h1 class="mb-4">Thomas Eckert</h1>
    <div class="flex">
      <div class="links mnw-44">
        <div class="link-display w-fit">
          <nuxt-link to="/bookmarks">✨&nbsp;Bookmarks</nuxt-link>
        </div>
        <!-- <div class="link-display w-fit">
          <nuxt-link to="/uses">🛰&nbsp;Things I use</nuxt-link>
        </div>
        <div class="link-display w-fit">
          <nuxt-link to="/about">👋&nbsp;About me</nuxt-link>
        </div> -->
      </div>
      <section>
        <p class="mb-4">
          I am a software engineer on Azure at Microsoft with a background in
          Nuclear Physics.
        </p>
        <p class="mb-8">
          You can find me on
          <a target="_blank" href="https://twitter.com/thomaseckert_">Twitter</a
          >, <a target="_blank" href="https://github.com/t-eckert">GitHub</a>,
          <a target="_blank" href="https://www.linkedin.com/in/thomas-eckert/"
            >LinkedIn</a
          >, and
          <a target="_blank" href="https://www.twitch.tv/thomaseckert">Twitch</a
          >.
        </p>
      </section>
    </div>
    <hr class="mb-8" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheIntroduction",
});
</script>
