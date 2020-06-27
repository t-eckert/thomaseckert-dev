<template>
  <div>
    <div class="flex flex-col">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead class="bg-grey-2">
              <tr>
                <th class="px-6 py-3 text-left leading-4">
                  <h5>Title</h5>
                </th>
                <th class="px-6 py-3 text-left leading-4">
                  <h5>Updated</h5>
                </th>
                <th class="px-6 py-3 text-left leading-4">
                  <h5>Tags</h5>
                </th>
                <th class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody class="bg-grey-1">
              <tr v-for="(post, index) in posts" :key="index">
                <td class="px-6 py-4 whitespace-no-wrap">
                  <div class="link-display w-fit">
                    <nuxt-link :to="`/${post.slug}`" class="mr-2">
                      {{ post.emoji }}&nbsp;{{ post.title }}
                    </nuxt-link>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap mnw-36">
                  <DateDisplay :dateString="post.updated" />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap flex flex-wrap">
                  <Pill
                    v-for="(tag, index) in post.tags"
                    :text="tag"
                    :key="index"
                    class="my-1 w-fit"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-right leading-5">
                  <nuxt-link
                    :to="`/admin/edit/${post.slug}`"
                    class="btn btn-small"
                  >
                    Edit
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Pill from "~/components/Pill.vue";
import DateDisplay from "~/components/DateDisplay.vue";
import { Post } from "~/interfaces";
import { calculateReadTime, formatDate, formatTimespan } from "~/functions";

export default Vue.extend({
  name: "ThePostTable",

  components: {
    Pill,
    DateDisplay,
  },

  props: {
    posts: Array as () => Post[],
  },

  data() {
    return {
      fullDate: false,
    };
  },

  methods: {
    formatDate(dateString: string): string {
      return formatDate(dateString);
    },
    commonDate(dateString: string): string {
      return formatTimespan(new Date(dateString));
    },
    calculateReadTime(text: string): string {
      return calculateReadTime(text);
    },
  },
});
</script>
