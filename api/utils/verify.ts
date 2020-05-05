import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const verify = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.header("token");

  if (token === "") {
    res.status(401).send("Access denied");
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET || "");
    if (verified) {
      next();
    }
  } catch (err) {
    res.status(401).send("Access denied");
  }
};

export default verify;
