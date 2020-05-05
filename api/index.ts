import express from "express";
import postsRouter from "./routes/posts";
import favoritesRouter from "./routes/favorites";
import authRouter from "./routes/auth";

const app = express();

app.use(express.json());

app.use("/posts", postsRouter);
app.use("/favorites", favoritesRouter);
app.use("/auth", authRouter);

module.exports = {
  path: "/api/",
  handler: app,
};
