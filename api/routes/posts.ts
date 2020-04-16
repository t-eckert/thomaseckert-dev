import express from "express";
import { validatePostStructure } from "../../functions";
import Post from "../../interfaces/Post";
import { PostModel } from "../../models/Post";

const postsRouter = express.Router();

postsRouter.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.json(posts);
  } catch (err) {
    console.error(err);
  }
});

postsRouter.get("/:slug", async (req, res) => {
  const slug = req.params["slug"];

  try {
    const post = await PostModel.findOne({ slug: slug });
    res.json(post);
  } catch (err) {
    console.error(err);
  }
});

postsRouter.post("/save", (req, res) => {
  const post = <Post>req.body;

  if (!validatePostStructure(post)) {
    res.sendStatus(400);
  } else {
    const postModel = new PostModel({
      title: post.title,
      slug: post.slug,
      publishDate: post.publishDate.toString(),
      tags: post.tags,
      emoji: post.emoji,
      isPublished: post.isPublished,
      content: post.content,
      preview: post.preview,
    });

    postModel.save();

    res.sendStatus(200);
  }
});

export default postsRouter;
