import Post from "~/interfaces/Post";

const MOCK_POST_DATA = {
  metadata: {
    slug: "lorem-is-my-name",
    title: "Lorem is my name",
    publishDate: "2020-05-14T07:00:00.000Z",
    tags: ["Tag 1", "Tag 2"],
    emoji: "😊",
    isPublished: false,
    preview:
      "Qui elit consequat ut ex quis. Culpa anim aute laboris commodo minim. Et non voluptate culpa dolor sunt incididunt sint reprehenderit sit elit magna voluptate proident. Reprehenderit cillum ullamco do aliquip sunt velit. Eiusmod exercitation ex dolor sit commodo.",
  },
  content: {
    slug: "lorem-is-my-name",
    markdown: `Consectetur irure sint excepteur eu reprehenderit mollit tempor aliqua non proident. In sit est eiusmod irure do ullamco proident ut aliquip officia. Ad ea sint velit ipsum. Proident commodo commodo eiusmod nostrud incididunt eiusmod sit labore non ex dolor ad velit nisi. Ad esse id officia cupidatat. Esse est occaecat enim magna ullamco et incididunt qui ut cillum nulla Lorem quis ea. Sunt laboris consectetur magna labore mollit esse ea.\n
  Mollit eiusmod enim cupidatat mollit pariatur. Incididunt et laboris consequat sunt sit ut. Lorem id dolor sit quis eiusmod sint aute magna veniam.\n
  Sint magna occaecat nulla ea elit laborum et enim est ullamco eiusmod enim. Commodo velit proident duis velit dolore laboris laboris id labore. Id qui fugiat magna proident culpa in Lorem nostrud commodo pariatur duis enim consectetur. Consequat et enim velit laborum aute magna ad adipisicing exercitation in est qui. Officia et incididunt qui esse do aute aliquip commodo consectetur reprehenderit non nulla voluptate sint. Sit voluptate deserunt ut qui id cillum aliquip cillum.`,
  },
};

it("is castable from JSON", () => {
  // Given
  const postJSON = JSON.parse(JSON.stringify(MOCK_POST_DATA));

  // When
  const post = <Post>postJSON;

  // Then
  expect(MOCK_POST_DATA).toEqual(post);
});
