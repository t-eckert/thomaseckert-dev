import axios from "axios";
import { GetterTree, ActionTree, MutationTree } from "vuex";
import { Post, PostContent, PostMetadata } from "@/interfaces";

export const state = () => ({
  postsMetadata: [],
  postsContent: new Map([
    [
      "test-post",
      {
        slug: "test-post",
        content: `Consectetur laborum Lorem anim veniam ut nostrud aliquip esse duis non. Incididunt tempor tempor laboris esse nostrud. Laboris est officia ad et duis cupidatat sint exercitation non excepteur eu officia minim. Ullamco irure duis amet amet est eiusmod laboris veniam fugiat. Id eiusmod nulla officia consectetur veniam.

Consequat aliquip cillum sint enim fugiat nostrud esse ullamco nostrud. Eiusmod elit ex laborum mollit aute id voluptate. Adipisicing ipsum Lorem aliqua cillum consectetur ullamco ullamco sit. Nulla eu reprehenderit consectetur Lorem velit deserunt proident velit mollit. Sit laboris aliquip do aliqua ut aliquip consequat. Aute aute est incididunt cillum nisi pariatur ea mollit fugiat nostrud anim proident.`,
      },
    ],
  ]),
});

export type PostsState = ReturnType<typeof state>;

export const getters: GetterTree<PostsState, PostsState> = {
  post: (state) => (slug: string) => {
    const metadata = state.postsMetadata.find(
      (postMetadata: PostMetadata) => slug === postMetadata.slug,
    );
    const content = state.postsContent.get(slug);
    return { metadata, content };
  },

  publishedPostsMetadata: (state) =>
    state.postsMetadata.filter(
      (postMetadata: PostMetadata) => postMetadata.isPublished,
    ),

  postsMetadata: (state) => state.postsMetadata,
};

export const mutations: MutationTree<PostsState> = {
  SET_METADATA: (state, postsMetadata) => {
    state.postsMetadata = postsMetadata;
  },

  UPSERT_CONTENT: (state, postContent) => {
    state.postsContent.set(postContent.slug, postContent);
  },
};

export const actions: ActionTree<PostsState, PostsState> = {
  loadMetadata: async (state) => {
    const postsMetadata = await axios.get(
      "http://localhost:3000/api/posts/metadata",
    );
    state.commit("SET_METADATA", postsMetadata.data);
  },

  loadContent: async (state, slug) => {
    const post = await axios.get(
      "http://localhost:3000/api/posts/content/" + slug,
    );
    state.commit("UPSERT_CONTENT", post.data);
  },

  save: async (state, post: Post) => {},
};
