import express from "express";
import jwt from "jsonwebtoken";

const authRouter = express.Router();

// If passed a UID that is valid, returns a JWT
authRouter.post("/token", (req, res) => {
  const uid = req.body.uid;

  const tokenSecret = <string>process.env.TOKEN_SECRET;
  const authedUid = <string>process.env.UID;

  if (tokenSecret === "") {
    res.status(401).send("Access denied");
  }

  if (authedUid === "") {
    res.status(401).send("Access denied");
  }

  if (uid != authedUid) {
    res.status(401).send("Access denied");
  }

  const token = jwt.sign({ uid }, tokenSecret);

  res.header("auth-token", token).send(token);
});

export default authRouter;
