import mongoose from "mongoose";
import connection from "../utils/database-handler";

const PostContentSchema = new mongoose.Schema(
  {
    slug: String,
    markdown: String,
  },
  { collection: "PostsContent" }
);

// Prevent duplication of PostMetadataModel
if (connection.modelNames().includes("PostContent")) {
  connection.deleteModel("PostContent");
}

const PostContentModel = mongoose.model("PostContent", PostContentSchema);

export default PostContentModel;
