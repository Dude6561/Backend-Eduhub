import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
  const SECRET_KEY = process.env.JWT_SECRET;
  const authHeader = req.headers["authorization"];
  if (authHeader && SECRET_KEY) {
    try {
      const decode = jwt.verify(authHeader, SECRET_KEY);
      console.log("Token is verify");
      next();
    } catch (err) {
      console.log("TOken is invalid");
    }
  }
};
