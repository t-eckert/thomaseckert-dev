<template>
  <div>
    <section class="card-login text-center shadow">
      <img
        :src="
          nasaImageUrl !== ''
            ? nasaImageUrl
            : 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031'
        "
        class="nasa-image"
      />
      <div class="mt-6">
        <button @click="$auth.loginWith('github')">🔑 Login</button>
        <nuxt-link to="/" class="btn btn-transparent">
          🏡 Return home
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "LoginRoute",

  // async asyncData() {
  //   const nasaApiResponse: any = await axios.get(
  //     `https://api.nasa.gov/planetary/apod?api_key=${process.env.GITHUB_API_KEY}`,
  //   );

  //   return {
  //     nasaImageUrl: nasaApiResponse["hdurl"],
  //   };
  // },

  data() {
    return {
      nasaImageUrl: "",
    };
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "🔑", name: "Login", link: "/login" },
    ]);
  },
});
</script>

<style scoped>
.card-login {
  background-color: var(--dark-background);
  max-width: 30rem;
  margin: auto;
  margin-top: 4rem;
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  padding-bottom: 1.5rem;
}

.nasa-image {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
</style>
