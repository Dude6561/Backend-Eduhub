import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// for getting questionsp
export const getQn = async (req: Request, res: Response) => {
  const { courseId, semesterName, subjectName } = req.query;
  if (!semesterName || !subjectName || !courseId) {
    return res.status(400).json({ error: " Enter all Fields to Get" });
  }
  try {
    const response = await prisma.semester.findMany({
      where: {
        courseId: Number(courseId),
        name: String(semesterName),
      },
      include: {
        Subject: {
          where: {
            name: String(subjectName),
          },
          include: {
            Year: {
              include: {
                Question: true,
              },
            },
          },
        },
      },
    });
    return res.status(200).json(response[0].Subject);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: "server  error while getting qn" });
  }
};

// for getting subject name
export const getSubjectName = async (req: Request, res: Response) => {
  const { courseId, semesterName } = req.query;

  if (!courseId || !semesterName) {
    return res
      .status(400)
      .json({ error: "courseId and semesterName are required" });
  }

  try {
    const response = await prisma.semester.findMany({
      where: {
        courseId: Number(courseId),
        name: String(semesterName),
      },
      include: {
        Subject: true,
      },
    });
    return res.status(200).json(response[0].Subject);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: "Server error getting subject name" });
  }
};
