import mongoose from "mongoose";
import connection from "../utils/database-handler";

const BookmarkCategorySchema = new mongoose.Schema(
    {
        name: String,
        slug: String,
        bookmarks: [
            {
                addedDate: {
                    type: Date,
                    default: Date.now,
                },
                link: String,
                linkText: String,
                description: String,
            },
        ],
    },
    { collection: "Bookmarks" }
);

// Prevent duplication of BookmarkCategoryModel
if (connection.modelNames().includes("BookmarkCategory")) {
    connection.deleteModel("BookmarkCategory");
}

const BookmarkCategoryModel = mongoose.model(
    "BookmarkCategory",
    BookmarkCategorySchema
);

export default BookmarkCategoryModel;
