<template>
  <section>
    <h1 class="mb-4 hero-text">Thomas Eckert</h1>
    <div class="links mb-4">
      <div>✨&nbsp;<nuxt-link to="/favorites">Favorites</nuxt-link></div>
      <!-- <div>🛰&nbsp;<nuxt-link to="/uses">Things I use</nuxt-link></div> -->
      <!-- <div>💁‍♂️&nbsp;<nuxt-link to="/about">About me</nuxt-link></div> -->
    </div>
    <p class="mb-4">
      I am a software engineer on Azure at Microsoft with a background in
      Nuclear Physics.
    </p>
    <p class="mb-8">
      You can find me on
      <a href="https://twitter.com/thomaseckert_">Twitter</a>,
      <a href="https://github.com/t-eckert">GitHub</a>,
      <a href="https://www.linkedin.com/in/thomas-eckert/">LinkedIn</a>, and
      <a href="https://www.twitch.tv/thomaseckert">Twitch</a>.
    </p>
    <hr class="mb-8" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheIntroduction",
});
</script>
