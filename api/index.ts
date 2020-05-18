import express from "express";
import postsRouter from "./routes/posts";
import authRouter from "./routes/auth";

const app = express();

app.use(express.json());

app.use("/auth/", authRouter);
app.use("/posts/", postsRouter);

module.exports = {
  path: "/api/",
  handler: app,
};
