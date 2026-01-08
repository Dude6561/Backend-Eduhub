import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const dashboard = (req: Request, res: Response) => {
  return res.status(200).json({ message: "ok" });
};
export default dashboard;

export const Course = async (req: Request, res: Response) => {
  const { courseName } = req.body;
  const response = await prisma.course.create({
    data: {
      name: courseName,
    },
  });
};
