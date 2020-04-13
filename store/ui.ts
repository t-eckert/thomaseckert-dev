import { MutationTree } from "vuex";
import Breadcrumb from "~/interfaces/Breadcrumb";

export const state = () => ({
  breadcrumbs: [],
});

export type UIState = ReturnType<typeof state>;

export const mutations: MutationTree<UIState> = {
  SET_BREADCRUMBS: (state, breadcrumbs) => (state.breadcrumbs = breadcrumbs),
};
