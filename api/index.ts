import express from "express";
import postsRouter from "./routes/posts";
import bookmarksRouter from "./routes/bookmarks";
import authRouter from "./routes/auth";

const app = express();

app.use(express.json());

app.use("/auth/", authRouter);
app.use("/bookmarks/", bookmarksRouter);
app.use("/posts/", postsRouter);

module.exports = {
  path: "/api/",
  handler: app,
};
