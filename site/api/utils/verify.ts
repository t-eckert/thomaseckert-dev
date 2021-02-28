import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

/** Verifies that a request has a valid JWT in the header */
const verify = (req: Request, res: Response, next: NextFunction) => {
    const token: string | undefined = req.header("token");
    const tokenSecret = process.env.TOKEN_SECRET;

    if (token === undefined || tokenSecret === undefined) {
        res.status(403).send("Access denied");
    } else {
        try {
            const verified = jwt.verify(token, tokenSecret);
            if (verified) {
                next();
            }
        } catch (err) {
            res.status(403).send("Access denied");
        }
    }
};

export default verify;
