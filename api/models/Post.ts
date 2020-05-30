import mongoose from "mongoose";
import connection from "../utils/database-handler";

const PostSchema = new mongoose.Schema(
  {
    _id: String,
    slug: String,
    emoji: String,
    title: String,
    createdOn: Date,
    updatedOn: Date,
    tags: Array,
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
