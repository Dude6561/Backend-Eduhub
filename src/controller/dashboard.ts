import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import { supabase } from "./supabase";
import prisma from "../prisma";
import { log } from "node:console";
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
//detail dashboard api
export const Detail = async (req: Request, res: Response) => {
  try {
    const { subject, year, course, semester } = req.body;
    const subjectNames = subject.split(",").map((data: any) => data.trim());
    let years;
    if (year == "2075-2080") {
      years = [2075, 2076, 2078, 2079, 2080];
    }
    const data = {
      subject: subjectNames,
      year: years,
      course: course,
      semester: semester,
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ Message: " Server Error" });
  }
};

// for inputiing files in the server storage
export const Input = async (req: Request, res: Response) => {
  try {
    const { subject, year, course, semester } = req.body;
    if (!req.files || Array.isArray(req.files)) {
      return res.status(400).json({ message: "Invalid file upload" });
    }
    const image1 = req.files.image1?.[0];
    const image2 = req.files.image2?.[0] ?? null;
    // const {data, error } = await supabase.storage.createBucket('')// to make bucket confusion if course comes or id
    const { data: data1, error: error1 } = await supabase.storage
      .from(`${course}`)
      .upload(`${semester}/${year}/${image1.originalname}`, image1.buffer);
    if (error1) throw error1;

    // image 2 is optional
    if (image2) {
      const image2 = req.files.image2?.[0];
      const { data: data2, error: error2 } = await supabase.storage
        .from(`${course}`)
        .upload(`${semester}/${year}/${image2.originalname}`, image2.buffer);
      if (error2) throw error2;
    }
    return res.status(200).json({ message: "Received" });
  } catch {
    return res.status(400).json({ message: "Error Uploading File" });
  }
};
