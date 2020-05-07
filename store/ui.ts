import { GetterTree, MutationTree } from "vuex";

export const state = () => ({
  breadcrumbs: [{ emoji: "🎈", name: "Home", link: "/" }],
});

export type UIState = ReturnType<typeof state>;

export const mutations: MutationTree<UIState> = {
  SET_BREADCRUMBS: (state, breadcrumbs) => (state.breadcrumbs = breadcrumbs),
};
