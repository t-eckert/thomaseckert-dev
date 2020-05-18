import bcrypt from "bcryptjs";
import { Router } from "express";
import jwt from "jsonwebtoken";

const authRouter = Router();

/** Return JWT if passphrase is correct */
authRouter.post("/login", async (req, res) => {
  const givenPassphrase: string | undefined = req.body.passphrase._value;
  const hashedPassphrase = process.env.HASHED_PASSPHRASE;
  const tokenSecret = process.env.TOKEN_SECRET;

  if (
    givenPassphrase === undefined ||
    hashedPassphrase === undefined ||
    tokenSecret === undefined
  ) {
    res.sendStatus(400);
  } else {
    // Perform validation
    const isValid = await bcrypt.compare(givenPassphrase, hashedPassphrase);

    if (!isValid) {
      res.sendStatus(400);
    } else {
      // Create token and assign
      const token = jwt.sign({ _id: "Is Admin" }, tokenSecret);
      res.send({ token: token });
    }
  }
});

/** User */
authRouter.get("/user", async (req, res) => {
  res.send({ user: "Thomas" });
});

export default authRouter;
