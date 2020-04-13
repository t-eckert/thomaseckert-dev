import axios from "axios";
import { GetterTree, ActionTree, MutationTree } from "vuex";
import Post from "~/interfaces/Post";

export const state = () => ({
  posts: [],
});

export type PostsState = ReturnType<typeof state>;

export const getters: GetterTree<PostsState, PostsState> = {
  publishedPosts: (state) =>
    state.posts.filter((post: Post) => post.isPublished),
};

export const mutations: MutationTree<PostsState> = {
  UPDATE_POSTS: (state, posts) => {
    state.posts = posts;
  },
};

export const actions: ActionTree<PostsState, PostsState> = {
  hydrate: async (state) => {
    const posts = await axios.get("http://localhost:3000/api/posts/");
    state.commit("UPDATE_POSTS", posts.data);
  },

  save: async (state, post: Post) => {
    await axios.post("http://localhost:3000/api/posts/save", post);
  },
};
