import express from "express";
import FavoriteModel from "../models/Favorite";
import Favorite from "../../interfaces/Favorite";
import verify from "../utils/verify";

const favoritesRouter = express.Router();

favoritesRouter.get("/", async (req, res) => {
  try {
    const favorites = await FavoriteModel.find();
    res.json(favorites);
  } catch (err) {
    console.log(err);
  }
});

favoritesRouter.get("/:slug", async (req, res) => {
  const slug = req.params["slug"];

  try {
    const favorite = await FavoriteModel.findOne({ slug });
    res.json(favorite);
  } catch (err) {
    console.log(err);
  }
});

// Upsert a Favorite into the DB
favoritesRouter.put("/", verify, async (req, res) => {
  const favorite = <Favorite>req.body;

  const favoriteModel = new FavoriteModel({
    slug: favorite.slug,
    title: favorite.title,
    markdown: favorite.markdown,
  });

  await favoriteModel.save();

  res.sendStatus(200);
});

export default favoritesRouter;
