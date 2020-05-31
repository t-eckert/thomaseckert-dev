import express from "express";
import PostModel from "../models/Post";
import verify from "../utils/verify";
import { Post } from "~/interfaces";
import { v4 as uuid } from "uuid";

const postsRouter = express.Router();

/** Gets posts from the database
 *
 * Optional query parameters:
 *
 * | Key         | Description                             | Allowed values       | Default   |
 * | ----------- | --------------------------------------- | -------------------- | --------- |
 * | `pivot`     | Pivot by which the sort is returned     | "updated", "created" | "updated" |
 * | `order`     | Direction in which the posts are sorted | "asc", "desc"        | "desc"    |
 * | `tag`       | Tag of the returned post                | `string`             |           |
 * | `limit`     | Maximum number of posts returned        | `int`                |           |
 * | `published` | Whether the post is published           | `boolean`            |           |
 */
postsRouter.get("/", async (req, res) => {
  const pivot = req.query.pivot === "created" ? req.query.pivot : "updated";
  const order = req.query.order === "asc" ? "" : "-";

  let filter: any = {};

  if (req.query.tag) {
    filter.tags = { $in: req.query.tag };
  }

  if (req.query.published) {
    filter.isPublished =
      req.query.published === "true" ? req.query.published : "false";
  }

  const limit = Number.parseInt(<string>req.query.limit) || 1024;

  try {
    const posts = await PostModel.find(filter)
      .sort(order + pivot)
      .limit(limit);
    res.send(posts);
  } catch (error) {
    res.status(404).send("Could not find posts");
  }
});

/** Gets one post by its slug */
postsRouter.get("/:slug", async (req, res) => {
  const slug = req.params["slug"];

  try {
    const post = await PostModel.findOne({ slug });
    res.send(post);
  } catch (error) {
    res.status(404).send("Could not find post");
  }
});

/** Create or overwrite post */
postsRouter.put("/", verify, async (req, res) => {
  const post = <Post>req.body;

  try {
    const postModel = new PostModel({
      _id: post._id || uuid(),
      slug: post.slug,
      emoji: post.emoji,
      title: post.title,
      created: post.created || new Date().toString(),
      updated: new Date().toString(),
      tags: post.tags,
      isPublished: post.isPublished,
      preview: post.preview,
      markdown: post.markdown,
    });

    await postModel.save();

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

export default postsRouter;
