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

export default Vue.extend({
  data() {
    return {
      title: "",
    };
  },

  methods: {
    create() {
      this.$store.dispatch("db/createNewFavorite", this.title);
      this.$emit("created");
    },
  },
});
</script>
