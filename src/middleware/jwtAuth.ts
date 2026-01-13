import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
  const SECRET_KEY = process.env.JWT_SECRET;

  if (!SECRET_KEY) {
    return res
      .status(500)
      .json({ message: "Server error: Missing secret key" });
  }

  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    console.log("Token Verified");
    next();
  } catch (err) {
    console.log("Token verification failed", err);
    return res.status(403).json({ message: "Invalid token" });
  }
};

export { jwtAuth };
