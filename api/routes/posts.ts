import express from "express";
import PostMetadataModel from "../models/PostMetadata";
import PostContentModel from "../models/PostContent";

const postsRouter = express.Router();

/** Gets metadata for all posts */
postsRouter.get("/metadata", async (req, res) => {
  try {
    const postsMetadata = await PostMetadataModel.find();
    res.send(postsMetadata);
  } catch (error) {
    res.status(404).send("Could not find post metadata");
  }
});

/** Get metadata for one post by its slug */
postsRouter.get("/metadata/:slug", async (req, res) => {
  const slug = req.params["slug"];

  try {
    const postMetadata = await PostMetadataModel.findOne({ slug });
    res.send(postMetadata);
  } catch (error) {
    res.status(404).send("Could not find post metadata");
  }
});

/** Gets content for all posts */
postsRouter.get("/content", async (req, res) => {
  try {
    const postsContent = await PostContentModel.find();
    res.send(postsContent);
  } catch (error) {
    res.status(404).send("Could not find post content");
  }
});

/** Get content for one post by its slug */
postsRouter.get("/content/:slug", async (req, res) => {
  const slug = req.params["slug"];

  try {
    const postContent = await PostContentModel.findOne({ slug });
    res.send(postContent);
  } catch (error) {
    res.status(404).send("Could not find post content");
  }
});

export default postsRouter;
