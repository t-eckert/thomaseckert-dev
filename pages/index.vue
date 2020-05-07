<template>
  <div class="container grid gc-1-3 gg-8 mt-8">
    <TheIntroduction />
    <ThePostGallery :postsMetadata="postsMetadata" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheIntroduction from "~/components/TheIntroduction.vue";
import ThePostGallery from "~/components/ThePostGallery.vue";

export default Vue.extend({
  name: "Homepage",

  components: {
    TheIntroduction,
    ThePostGallery,
  },

  data() {
    return {
      postsMetadata: [
        {
          slug: "test",
          emoji: "🎈",
          title: "This Post is a Test",
          tags: ["Test", "Exam"],
          publishDate: new Date(2020, 5, 5),
          preview:
            "Qui incididunt consectetur consequat deserunt minim laboris officia in. Duis aliquip aliqua enim dolore velit et id ullamco anim laboris minim. Adipisicing fugiat duis qui nostrud incididunt pariatur ut consectetur anim sunt non ex est eiusmod.",
        },
      ],
    };
  },
});
</script>
