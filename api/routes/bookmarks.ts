import express from "express";
import BookmarkCategoryModel from "../models/BookmarkCategory";
import verify from "../utils/verify";
import { Bookmark, BookmarkCategory } from "~/interfaces";

const bookmarksRouter = express.Router();

/** Gets all bookmark categories */
bookmarksRouter.get("/", async (req, res) => {
  try {
    const bookmarkCategories = await BookmarkCategoryModel.find();
    res.send(bookmarkCategories);
  } catch (error) {
    res.status(404).send("Could not find bookmarks");
  }
});

/** Get bookmarks by their category */
bookmarksRouter.get("/:slug", async (req, res) => {
  const slug = req.params["slug"];

  try {
    const bookmarks = await BookmarkCategoryModel.find({ slug });
    res.send(bookmarks);
  } catch (error) {
    res.status(404).send("Could not find bookmarks");
  }
});

/** Add a new bookmark category */
bookmarksRouter.put("/", verify, async (req, res) => {
  const bookmarkCategory = <BookmarkCategory>req.body;

  try {
    const bookmarkCategoryModel = new BookmarkCategoryModel({
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

/** Add a new bookmark to a category */
bookmarksRouter.post("/:slug", verify, async (req, res) => {
  const slug = req.params["slug"];
  const bookmark = <Bookmark>req.body;

  try {
    await BookmarkCategoryModel.update(
      { slug },
      { $push: { bookmarks: bookmark } }
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

export default bookmarksRouter;
