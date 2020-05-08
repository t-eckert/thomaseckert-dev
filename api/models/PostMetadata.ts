import mongoose from "mongoose";
import connection from "../utils/database-handler";

const PostMetadataSchema = new mongoose.Schema(
  {
    slug: String,
    title: String,
    publishDate: Date,
    tags: Array,
    emoji: String,
    isPublished: Boolean,
    preview: String,
  },
  { collection: "PostsMetadata" }
);

// Prevent duplication of PostMetadataModel
if (connection.modelNames().includes("PostMetadata")) {
  connection.deleteModel("PostMetadata");
}

const PostMetadataModel = mongoose.model("PostMetadata", PostMetadataSchema);

export default PostMetadataModel;
