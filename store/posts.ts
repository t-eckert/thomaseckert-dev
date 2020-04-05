import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { Post } from "@/types/post";

@Module({
  name: "posts",
  stateFactory: true,
  namespaced: true
})
export default class Posts extends VuexModule {
  posts: Post[] = [
    {
      title: "Encryption and Decryption with Python Azure Functions",
      publishDate: new Date(2019, 6, 12),
      tags: ["Programming"],
      emoji: "🌐",
      isPublished: true,
      content:
        "Duis ea fugiat et velit consequat sint aute laboris laborum id nulla. Deserunt pariatur reprehenderit eu eiusmod deserunt elit in aute reprehenderit commodo. Amet esse sit dolor aute exercitation duis eu duis. Velit deserunt labore aute id dolore. Excepteur nulla aliquip proident labore proident et ut ea labore cillum sint ullamco. Lorem voluptate esse cupidatat amet consectetur tempor in sint eiusmod.",
      preview:
        "Let's build two Azure Functions, both HTTP triggers. One to encrypt a message, the other to decrypt it."
    }
  ];
}
