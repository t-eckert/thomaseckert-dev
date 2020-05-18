import mongoose from "mongoose";
import connection from "../utils/database-handler";

const BookmarkSchema = new mongoose.Schema(
  {
    category: String,
    addedDate: Date,
    link: String,
    linkText: String,
    description: String,
  },
  { collection: "Bookmarks" }
);

// Prevent duplication of BookmarkMetadataModel
if (connection.modelNames().includes("Bookmark")) {
  connection.deleteModel("Bookmark");
}

const BookmarkModel = mongoose.model("Bookmark", BookmarkSchema);

export default BookmarkModel;
