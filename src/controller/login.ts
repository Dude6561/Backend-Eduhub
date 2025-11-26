import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  res.json({ message: "Login SUccess" });
};

export const signup = async (req: Request, res: Response) => {
  res.json({ message: " signin success" });
};
