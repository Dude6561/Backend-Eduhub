import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
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
//detail dashboard api
export const Detail = async(req:Request, res:Response) =>{
  try{
  const {subject, year, course, semester} = req.body;
  const subjectNames = subject.split(",").map((data:any) => data.trim());
  let years;
  if( year == "2075-2080"){
     years = [2075,2076,2078,2079,2080];
  }
  const data ={subject: subjectNames, year: years, course:course, semester:semester};
  return res.status(200).json(data);
  } catch (error){
return res.status(500).json({Message : " Server Error"});
  }
}

// for inputiing files in the server storage
export const Input = async(req:Request, res:Response) =>{
  try{
  const { subject, year, course, semester} = req.body;

  } catch{}
}
