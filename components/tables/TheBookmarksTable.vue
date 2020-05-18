<template>
  <table>
    <thead>
      <tr>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(category, index) in bookmarkCategories" :key="index">
        <td>
          {{ category.name }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from "vue";
import { BookmarkCategory } from "~/interfaces";

export default Vue.extend({
  name: "TheBookmarksTable",

  props: {
    bookmarkCategories: Array as () => BookmarkCategory[],
  },
});
</script>
