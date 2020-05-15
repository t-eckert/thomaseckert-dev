import express from "express";
import PostModel from "../models/Post";

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

export default postsRouter;
