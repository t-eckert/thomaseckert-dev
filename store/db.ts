import axios from "axios";
import { ActionTree } from "vuex";
import { host, routes } from "~/constants";

export const state = () => ({});

export type DBState = ReturnType<typeof state>;

export const actions: ActionTree<DBState, DBState> = {
  saveFavorite: async (state, { favorite, uid }) => {
    if (uid == process.env.UID) {
      const token = axios.post(host + routes.AUTH_TOKEN, { uid });

      await axios.put(host + routes.FAVORITES, favorite, {
        headers: { token },
      });
    }
  },

  savePost: async (state, { post, uid }) => {
    if (uid === process.env.UID) {
      const token = await axios.post(host + routes.AUTH_TOKEN, { uid });

      await axios.put(host + routes.POST_METADATA, post.metadata, {
        headers: { token },
      });
      await axios.put(host + routes.POST_CONTENT, post.content, {
        headers: { token },
      });
    }
  },
};
