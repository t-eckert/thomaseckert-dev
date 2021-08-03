import mongoose from "mongoose";
import connection from "../utils/database-handler";

/** `Post` schema
 *
 * Used by Mongoose for interfacing with MongoDB
 */
const PostSchema = new mongoose.Schema(
    {
        /** Unique GUID identifying the post */
        _id: String,

        /** Defines the URL path to the post
         *
         * Derived from the title as all lowercase with dashes replacing spaces */
        slug: String,

        /** Title of the post */
        title: String,

        /** Date when the post was created */
        created: Date,

        /** Date when the post was last changed */
        updated: Date,

        /** Tags for categorizing the post (e.g. Python, Programming, Science) */
        tags: Array,

        /** Whether the post is listed on the homepage */
        isPublished: Boolean,

        /** Text describing the post */
        preview: String,

        /** Body of the post, formatted in markdown */
        markdown: String,
    },
    { collection: "Posts" }
);

// Prevent duplication of PostMetadataModel
if (connection.modelNames().includes("Post")) {
    connection.deleteModel("Post");
}

// Create the model from schema
const PostModel = mongoose.model("Post", PostSchema);

export default PostModel;
