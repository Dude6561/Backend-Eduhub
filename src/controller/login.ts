import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {};

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await prisma.us;
};
