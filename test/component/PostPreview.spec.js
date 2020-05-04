import { shallowMount } from "@vue/test-utils";
import PostPreview from "@/components/PostPreview.vue";

const getMountedComponent = (Component, propsData) =>
  shallowMount(Component, { propsData });

describe("PostPreview", () => {
  it("renders post preview data", () => {
    expect(
      getMountedComponent(PostPreview, {
        postMetadata: {
          slug: "lorem-is-my-name",
          title: "Lorem is my name",
          publishDate: "2020-05-14T07:00:00.000Z",
          tags: ["Tag 1", "Tag 2"],
          emoji: "😊",
          isPublished: false,
          preview:
            "Qui elit consequat ut ex quis. Culpa anim aute laboris commodo minim. Et non voluptate culpa dolor sunt incididunt sint reprehenderit sit elit magna voluptate proident. Reprehenderit cillum ullamco do aliquip sunt velit. Eiusmod exercitation ex dolor sit commodo.",
        },
      }).text(),
    ).toBe(
      `😊 Lorem is my name 4 May 2020 \n` +
        `      Tag 1\n` +
        `    \n` +
        `      Tag 2\n` +
        `     Qui elit consequat ut ex quis. Culpa anim aute laboris commodo minim. Et non voluptate culpa dolor sunt incididunt sint reprehenderit sit elit magna voluptate proident. Reprehenderit cillum ullamco do aliquip sunt velit. Eiusmod exercitation ex dolor sit commodo.`,
    );
  });
});
