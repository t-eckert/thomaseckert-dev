import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { Breadcrumb } from "@/types/breadcrumb";

@Module({
  name: "ui",
  stateFactory: true,
  namespaced: true
})
export default class UI extends VuexModule {
  breadcrumbs: Breadcrumb[] = [
    { emoji: "🏡", name: "Home", link: "/" },
    { emoji: "💁‍♂️", name: "About", link: "/about" }
  ];

  @Mutation
  setBreadcrumbs(path: Breadcrumb[]) {
    this.breadcrumbs = path;
  }
}
