import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import ui from "~/store/ui";

let uiStore: ui;

function initializeStores(store: Store<any>): void {
  uiStore = getModule(ui, store);
}

export { initializeStores, uiStore };
