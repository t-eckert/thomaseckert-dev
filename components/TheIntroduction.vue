<template>
  <section>
    <h1 class="mb-2 hero-text">Thomas Eckert</h1>
    <p class="mb-4">
      I am a software engineer on Azure at Microsoft with a background in
      Nuclear Physics. <nuxt-link to="/about">Learn more about me</nuxt-link>.
    </p>
    <p class="mb-8">
      Outside of work, I paint watercolors.
      <nuxt-link to="/favorites">
        View a collection of my favorite things</nuxt-link
      >.
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
