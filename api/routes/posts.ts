import express from "express";
import { validatePostStructure } from "../../functions";
import Post from "../../interfaces/Post";
import PostContentModel from "../models/PostContent";
import PostMetadataModel from "../models/PostMetadata";
import verify from "../utils/verify";

const postsRouter = express.Router();

/** Get the metadata of all posts in the database */
postsRouter.get("/metadata", async (req, res) => {
  try {
    const postsMetadata = await PostMetadataModel.find();
    res.json(postsMetadata);
  } catch (err) {
    console.log(err);
  }
});

/** Get the metadata of a single post in the database */
postsRouter.get("/metadata/:slug", async (req, res) => {
  const slug = req.params["slug"];

  try {
    const postsMetadata = await PostMetadataModel.findOne({ slug });
    res.json(postsMetadata);
  } catch (err) {
    console.log(err);
  }
});

/** Get the content of a single post in the database by its slug */
postsRouter.get("/content/:slug", async (req, res) => {
  const slug = req.params["slug"];

  try {
    const postContent = await PostContentModel.findOne({ slug });
    res.json(postContent);
  } catch (err) {
    console.log(err);
  }
});

/** Get the content of all posts in the database */
postsRouter.get("/content", async (req, res) => {
  try {
    const postsContent = await PostContentModel.find();
    res.json(postsContent);
  } catch (err) {
    console.log(err);
  }
});

/** Saves a post to the database */
postsRouter.put("/", async (req, res) => {
  const key = req.headers["key"];
  const post = <Post>req.body;

  if (key !== process.env.KEY) {
    res.sendStatus(403);
  }

  const { metadata, content } = post;

  const metadataModel = new PostMetadataModel({
    slug: metadata.slug,
    title: metadata.title,
    publishDate: metadata.publishDate.toString(),
    tags: metadata.tags,
    emoji: metadata.emoji,
    isPublished: metadata.isPublished,
    preview: metadata.preview,
  });

  await metadataModel.save();

  const contentModel = new PostContentModel({
    slug: content.slug,
    markdown: content.markdown,
  });

  await contentModel.save();

  res.sendStatus(200);
});

export default postsRouter;
