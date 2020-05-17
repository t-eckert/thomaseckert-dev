import mongoose from "mongoose";
import connection from "../utils/database-handler";

const PostSchema = new mongoose.Schema(
  {
    slug: String,
    title: String,
    publishDate: Date,
    tags: Array,
    emoji: String,
    isPublished: Boolean,
    preview: String,
    markdown: String,
  },
  { collection: "Posts" }
);

// Prevent duplication of PostMetadataModel
if (connection.modelNames().includes("Post")) {
  connection.deleteModel("Post");
}

const PostModel = mongoose.model("Post", PostSchema);

export default PostModel;
