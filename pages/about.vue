<template>
  <div class="container mt-8">
    <div class="grid grid-cols-4 gg-4">
      <div class="col-start-2 col-span-2">
        <img src="/self.jpg" class="w-fill object-contain" />
      </div>
      <div class="row-start-2 col-start-1 pt-8">
        <div class="link-display mb-2">
          <a target="_blank" href="mailto:thomas.james.eckert@gmail.com"
            >✉ Email</a
          >
        </div>
        <div class="link-display mb-2">
          <a target="_blank" href="https://twitter.com/thomaseckert_"
            >🐦 Twitter</a
          >
        </div>
        <div class="link-display mb-2">
          <a target="_blank" href="https://github.com/t-eckert">👨‍💻 GitHub</a>
        </div>
        <div class="link-display mb-2">
          <a target="_blank" href="https://www.linkedin.com/in/thomas-eckert/"
            >📘 LinkedIn</a
          >
        </div>
        <div class="link-display mb-2">
          <a target="_blank" href="https://www.twitch.tv/thomaseckert"
            >🎥 Twitch</a
          >
        </div>
      </div>
      <div class="row-start-2 col-start-2 col-span-2">
        <p>
          I'm a software engineer.
        </p>
        <p>
          Tempor ea culpa qui Lorem velit esse nisi qui tempor exercitation non
          in eu qui. Et reprehenderit nulla reprehenderit duis magna Lorem.
          Dolor aliquip Lorem excepteur cillum veniam minim velit eu officia
          velit dolor velit. Consectetur duis duis voluptate minim. Culpa
          aliquip proident aliquip occaecat culpa in ad anim excepteur minim.
        </p>
        <p>
          Tempor ea culpa qui Lorem velit esse nisi qui tempor exercitation non
          in eu qui. Et reprehenderit nulla reprehenderit duis magna Lorem.
          Dolor aliquip Lorem excepteur cillum veniam minim velit eu officia
          velit dolor velit. Consectetur duis duis voluptate minim. Culpa
          aliquip proident aliquip occaecat culpa in ad anim excepteur minim.
        </p>
        <p>
          Tempor ea culpa qui Lorem velit esse nisi qui tempor exercitation non
          in eu qui. Et reprehenderit nulla reprehenderit duis magna Lorem.
          Dolor aliquip Lorem excepteur cillum veniam minim velit eu officia
          velit dolor velit. Consectetur duis duis voluptate minim. Culpa
          aliquip proident aliquip occaecat culpa in ad anim excepteur minim.
        </p>
      </div>
      <div class="row-start-2 col-start-4"></div>
    </div>
    <hr class="mb-4" />
    <div>🏡&nbsp;<nuxt-link to="/">Return home</nuxt-link></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About",

  components: {},

  async asyncData() {},

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "👋", name: "About", link: "/" },
    ]);
  },
});
</script>
