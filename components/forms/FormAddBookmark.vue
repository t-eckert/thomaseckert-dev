<template>
  <form>
    <div class="flex justify-between mb-4">
      <label for="category">Category</label>
      <input type="url" name="category" id="category" />
    </div>
    <div class="flex justify-between mb-4">
      <label for="link">Link</label>
      <input type="url" name="link" id="link" />
    </div>
    <div class="flex justify-between mb-4">
      <label for="link-text">Link text</label>
      <input type="text" name="link-text" id="link-text" />
    </div>
    <div class="flex justify-between mb-4">
      <label for="description" class="mr-4">Description</label>
      <input type="text" name="description" id="description" />
    </div>
    <button>Add</button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FormAddBookmark",
});
</script>
