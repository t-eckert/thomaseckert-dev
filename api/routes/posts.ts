import express from "express";
import PostModel from "../models/Post";
import verify from "../utils/verify";
import { Post } from "~/interfaces";

const postsRouter = express.Router();

/** Gets all posts */
postsRouter.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.send(posts);
  } catch (error) {
    res.status(404).send("Could not find posts");
  }
});

/** Get one post by its slug */
postsRouter.get("/:slug", async (req, res) => {
  const slug = req.params["slug"];

  try {
    const post = await PostModel.findOne({ slug });
    res.send(post);
  } catch (error) {
    res.status(404).send("Could not find post metadata");
  }
});

/** Create or overwrite post */
postsRouter.put("/", verify, async (req, res) => {
  const post = <Post>req.body;

  try {
    const postModel = new PostModel({
      slug: post.slug,
      title: post.title,
      publishDate: post.publishDate.toString(),
      tags: post.tags,
      emoji: post.emoji,
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
