<template>
  <div class="container">
    <div class="card mxw-88 mt-64 h-center">
      <div>
        <input
          v-model="passphrase"
          type="password"
          name="passphrase"
          id="passphrase"
          class="mb-4 mnw-80"
        />
      </div>
      <div class="flex justify-around">
        <button @click="login()">🔒&nbsp;Login</button>
        <nuxt-link class="btn btn-transparent" to="/">
          🏡&nbsp;Return home
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LoginPage",

  data() {
    return {
      passphrase: "",
    };
  },

  methods: {
    async login() {
      try {
        // @ts-ignore auth only exists on the object at runtime
        const res = this.$auth.loginWith("local", { data: { passphrase } });
        console.log(res);
      } catch (err) {
        console.log(err);
        this.resetInput();
      }
    },
    resetInput() {
      this.passphrase = "";
    },
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "🔑", name: "Login", link: "/login" },
    ]);
  },
});
</script>
