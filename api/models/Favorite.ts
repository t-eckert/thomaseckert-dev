import mongoose from "mongoose";
import connection from "../utils/database-handler";

const FavoriteSchema = new mongoose.Schema(
  {
    slug: String,
    title: String,
    markdown: String,
  },
  { collection: "Favorites" },
);

// Prevent duplication of Favorite
if (connection.modelNames().includes("Favorite")) {
  connection.deleteModel("Favorite");
}

const FavoriteModel = mongoose.model("Favorite", FavoriteSchema);

export default FavoriteModel;
