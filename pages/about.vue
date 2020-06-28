<template>
  <div class="container mt-8">
    <div class="grid grid-cols-4 gg-4">
      <div class="col-start-2 col-span-2">
        <img src="/self.jpg" class="w-fill object-contain" />
      </div>
      <div class="row-start-2 col-start-1 pt-8">
        <div class="link-display mb-2">
          <a target="_blank" href="mailto:thomas.james.eckert@gmail.com"
            >✉&nbsp;Email</a
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
          Hi 👋, my name is Thomas Eckert. I live in Seattle, Washington with my
          wife, <a target="_blank" href="https://sophiaross.me/">Sophia</a>, and
          our corgi, Winona.
        </p>
        <p>
          I studied physics, focusing on nuclear interactions for fusion
          diagnostics. Much of this work involved programming simulations in
          C++. I wrote a
          <a
            target="_blank"
            href="https://www.houghton.edu/wp-content/uploads/2019/02/physics-thesis-thomas-eckert-2016.pdf"
            >thesis</a
          >
          and a
          <a target="_blank" href="https://arxiv.org/pdf/1707.09375.pdf"
            >paper</a
          >
          about it.
        </p>
        <p>
          After completing my Masters of Physics at the University of Rochester,
          I moved to Seattle and started working at Microsoft as an engineer.
          Today, I build platform tooling for defining SLOs on Azure.
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
