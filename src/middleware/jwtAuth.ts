import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
  const SECRET_KEY = process.env.JWT_SECRET;
  const authHeader = req.headers["authorization"];
  if (!SECRET_KEY) {
    return res
      .status(404)
      .json({ message: "Server error: Missing secret key" });
  }
  if (!authHeader) {
    return res.status(404).json({ message: "Authorization token missing" });
  }

  try {
    const decodedAuth = authHeader.split(" ")[1];
    const decode = jwt.verify(decodedAuth, SECRET_KEY);

    console.log("Token Verified");
    return res.status(500).json({ message: "token verification succes" });

    next();
  } catch (err) {
    console.log("Token verification failed");
    return res.status(404).json({ message: "token verification failed" });
  }
};

export { jwtAuth };
