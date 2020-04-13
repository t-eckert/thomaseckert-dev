import mongoose from "mongoose";
import connection from "../utils/database-handler";

const PostSchema = new mongoose.Schema({
  title: String,
  publishDate: Date,
  tags: Array,
  emoji: String,
  isPublished: Boolean,
  preview: String,
  content: String,
});

// Prevent duplication of PostModel
if (connection.modelNames().includes("Post")) {
  connection.deleteModel("Post");
}

export const PostModel = mongoose.model("Post", PostSchema);
