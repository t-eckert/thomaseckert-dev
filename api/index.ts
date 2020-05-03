import express from "express";
import postsRouter from "./routes/posts";
import favoritesRouter from "./routes/favorites";

const app = express();

app.use(express.json());

app.use("/posts", postsRouter);
app.use("/favorites", favoritesRouter);

module.exports = {
  path: "/api/",
  handler: app,
};
