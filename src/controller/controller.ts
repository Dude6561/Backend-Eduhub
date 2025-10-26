import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSubject = async (req: Request, res: Response) => {
  const { semesterName } = req.body;
  const response = await prisma.subDetail.findMany({
    where: {
      semesterName,
    },
  });
  // for getting structured data
  // const modified = response.reduce<any>((acc, item) => {
  //   if (!acc[item.subjectName]) {
  //     acc[item.subjectName] = {
  //       courseId: item.courseId,
  //       subjectName: item.subjectName,
  //       semesterName: item.semesterName,
  //       note: item.note,
  //       year: [{ time: item.year, qn: item.qn }],
  //     };
  //   } else {
  //     acc[item.subjectName].year.push({ time: item.year, qn: item.qn });
  //   }

  //   return acc;
  // }, {});

  return res.status(200).json(response);
};
