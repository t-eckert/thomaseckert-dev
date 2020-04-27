import PostMetadata from "@/interfaces/PostMetadata";
import PostContent from "@/interfaces/PostContent";

export default interface Post {
  metadata: PostMetadata;
  content: PostContent;
}
