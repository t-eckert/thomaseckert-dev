<template>
  <form>
    <div class="flex flex-col justify-between mb-2 items-baseline">
      <label for="category" class="mb-1">Category</label>
      <input type="url" name="category" id="category" class="w-full" />
    </div>
    <div class="flex flex-col justify-between mb-2 items-baseline">
      <label for="link" class="mb-1">Link</label>
      <input type="url" name="link" id="link" class="w-full" />
    </div>
    <div class="flex flex-col justify-between mb-2 items-baseline">
      <label for="title" class="mb-1">Title</label>
      <input type="text" name="title" id="title" class="w-full" />
    </div>
    <div class="flex flex-col justify-between mb-2">
      <label for="description" class="mb-1">Description</label>
      <textarea name="description" id="description" />
    </div>
    <button class="btn-small">Add</button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FormAddBookmark",
});
</script>
