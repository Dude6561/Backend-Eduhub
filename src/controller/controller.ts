import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSubject = async (req: Request, res: Response) => {
  const { semesterName, subjectName, courseId } = req.query;
  if (!semesterName || !subjectName || !courseId) {
    return res.status(400).json({ error: " Enter all Fields to Get" });
  }
  try {
    const response = await prisma.subDetail.findMany({
      where: {
        semesterName: String(semesterName),
        courseId: Number(courseId),
        subjectName: String(subjectName),
      },
    });
    return res.status(200).json(response);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
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
    const response = await prisma.subject.findMany({
      where: {
        courseId: Number(courseId),
        semesterName: String(semesterName),
      },
    });
    return res.status(200).json(response);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};
