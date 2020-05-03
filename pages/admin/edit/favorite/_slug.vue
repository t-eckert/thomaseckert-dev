<template>
  <div class="editor">
    <div>
      <span>
        <input
          class="mb-4 w-128"
          type="text"
          name="title"
          id="title"
          v-model="favorite.title"
        />
      </span>
      <TheEditor class="mb-4" v-model="favorite.markdown" />
      <span class="editor-controls">
        <button @click="save()">Save</button>
        <div>
          <input type="checkbox" name="is-published" id="is-published" />
          <label for="is-published">Published</label>
        </div>
      </span>
    </div>
    <FavoriteView :favorite="favorite" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { host, routes } from "@/constants";
import TheEditor from "@/components/TheEditor.vue";
import FavoriteView from "@/components/FavoriteView.vue";

export default Vue.extend({
  name: "TheFavoriteEditView",

  middleware: ["auth"],

  components: {
    TheEditor,
    FavoriteView,
  },

  async asyncData({ params }) {
    const { data: favorite } = await axios.get(
      host + routes.FAVORITES + params.slug,
    );

    return {
      favorite,
    };
  },

  computed: {},
  // data() {
  //   return {
  //     title: "",
  //     markdown: "",
  //   };
  // },

  methods: {
    save() {
      console.log("save!");
    },
  },

  mounted() {
    this.$store.commit("ui/SET_BREADCRUMBS", [
      { emoji: "🏡", name: "Home", link: "/" },
      { emoji: "🕶", name: "Admin", link: "/admin" },
    ]);
  },
});
</script>
