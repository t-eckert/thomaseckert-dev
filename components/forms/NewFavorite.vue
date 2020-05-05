<template>
  <section>
    <form action="" method="PUT" class="flex">
      <div class="flex-vertical">
        <label for="title" class="mb-2">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          v-model="title"
          class="mb-4 mr-8"
        />
      </div>
    </form>
    <button @click="create()">Create</button>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Favorite } from "~/interfaces";
import { slugify } from "~/functions";

export default Vue.extend({
  data() {
    return {
      title: "",
    };
  },

  methods: {
    create() {
      const title = this.title;
      this.$store.dispatch("db/saveFavorite", {
        favorite: {
          title,
          slug: slugify(title),
          markdown: "",
        },
        uid: this.$auth.user.id,
      });
      this.$emit("created");
    },
  },
});
</script>
