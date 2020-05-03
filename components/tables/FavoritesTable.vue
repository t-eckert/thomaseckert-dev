<template>
  <div class="card shadow">
    <h2 class="mb-8">
      ✨&nbsp;<nuxt-link to="/favorites">Favorites</nuxt-link>
    </h2>
    <div class="mb-8">
      <div
        v-for="(favorite, index) in favorites"
        :key="index"
        class="mb-6 flex flex-spread"
      >
        <div>{{ favorite.title }}</div>
        <div>
          <nuxt-link class="btn" :to="'/admin/edit/favorite/' + favorite.slug">
            Edit
          </nuxt-link>
        </div>
      </div>
    </div>
    <button @click="isCreatingNew = !isCreatingNew">
      {{ isCreatingNew ? "Cancel" : "New" }}
    </button>
    <NewFavorite class="mt-8" v-if="isCreatingNew" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NewFavorite from "@/components/forms/NewFavorite.vue";

import { Favorite } from "../../interfaces";

export default Vue.extend({
  name: "FavoritesTable",

  components: {
    NewFavorite,
  },

  props: {
    favorites: Array as () => Favorite[],
  },

  data() {
    return {
      isCreatingNew: false,
    };
  },

  methods: {
    created() {
      this.isCreatingNew = false;
    },
  },
});
</script>
