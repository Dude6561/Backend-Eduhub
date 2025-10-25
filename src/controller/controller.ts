import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSubject = async (req: Request, res: Response) => {
  const { semesterName } = req.body;
  const response = await prisma.subject.findMany({
    where: {
      semesterName,
    },
  });

  return res.status(200).json(response);
};
