import express from "express";
import postsRouter from "./routes/posts";

const app = express();

app.use(express.json());

app.use("/posts/", postsRouter);

module.exports = {
  path: "/api/",
  handler: app,
};
