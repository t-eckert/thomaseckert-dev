import { shallowMount } from "@vue/test-utils";
import PostPreview from "@/components/PostPreview.vue";

const getMountedComponent = (Component, propsData) =>
  shallowMount(Component, { propsData });

describe("PostPreview", () => {
  it("renders post preview data", () => {
    expect(
      getMountedComponent(PostPreview, { post: { title: "Title" } }).text(),
    ).toBe("Title");
  });
});
