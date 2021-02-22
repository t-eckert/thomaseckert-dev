import express from "express";
import BookmarkCategoryModel from "../models/BookmarkCategory";
import verify from "../utils/verify";
import { BookmarkCategory, Bookmark } from "~/interfaces";
import { v4 as uuid } from "uuid";

const bookmarksRouter = express.Router();

/** Get all bookmark categories. */
bookmarksRouter.get("/", async (req, res) => {
    try {
        const bookmarkCategories = await BookmarkCategoryModel.find();
        res.send(bookmarkCategories);
    } catch (error) {
        res.status(404).send("Could not find bookmarks");
    }
});

/** Get bookmarks by their category slug. */
bookmarksRouter.get("/:slug", async (req, res) => {
    const slug = req.params["slug"];

    try {
        const bookmarks = await BookmarkCategoryModel.find({ slug });
        res.send(bookmarks);
    } catch (error) {
        res.status(404).send("Could not find bookmarks");
    }
});

/** Create a new bookmarks category. */
bookmarksRouter.post("/", verify, async (req, res) => {
    const bookmarkCategory = <BookmarkCategory>req.body;

    try {
        bookmarkCategory.bookmarks = bookmarkCategory.bookmarks.map((bookmark) => {
            bookmark._id = bookmark._id || uuid();
            return bookmark;
        });

        const bookmarkCategoryModel = new BookmarkCategoryModel({
            _id: bookmarkCategory._id || uuid(),
            name: bookmarkCategory.name,
            slug: bookmarkCategory.slug,
            bookmarks: bookmarkCategory.bookmarks,
        });
        await bookmarkCategoryModel.save();
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
    }
});

/** Create a new bookmark in a category by its `slug`. */
bookmarksRouter.post("/:slug", verify, async (req, res) => {
    const slug = req.params["slug"];
    const bookmark = <Bookmark>req.body;

    try {
        bookmark._id = bookmark._id || uuid();

        await BookmarkCategoryModel.update(
            { slug },
            { $push: { bookmarks: bookmark } }
        );
        res.send(bookmark._id);
    } catch (err) {
        console.log(err);
    }
});

/** Update a bookmark by its `_id`. */
bookmarksRouter.put("/:slug/:_id", async () => { });

export default bookmarksRouter;
