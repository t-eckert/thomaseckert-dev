import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import ui from "@/store/ui";
import posts from "@/store/posts";

let uiStore: ui;
let postsStore: posts;

function initializeStores(store: Store<any>): void {
  uiStore = getModule(ui, store);
  postsStore = getModule(posts, store);
}

export { initializeStores, uiStore, postsStore };
