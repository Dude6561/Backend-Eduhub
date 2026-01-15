import { NextFunction, Request, Response } from "express";
import joi from "joi";
const checkCourse = (req: Request, res: Response, next: NextFunction) => {
  const schema = joi.object({
    courseName: joi.string().min(3).max(10).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(200).json({ message: "badrequest", error });
  }
  next();
};
export { checkCourse };

// for checking in details input
const checkDetail =(req:Request, res:Response, next:NextFunction)=>{
  const {subject, year, course, semester} = req.body;
  const subjectNames = subject.split(",").map((data:any) => data.trim());
  let years;
  if( year == "2075-2080"){
     years = [2075,2076,2078,2079,2080];
  }
  const data ={subjectNames: subjectNames, years: years, courseName:course, semester:semester}
  const schema = joi.object({
   courseName: joi.number().required(),
   subjectNames:joi.array().items(joi.string()).required(),
   semester: joi.string().required(),
   years: joi.array().items(joi.number()).required()
  });
  const { error } = schema.validate(data);
  if(error){
    console.log(error);
    
    return res.status(200).json(error);
  }
  next();
}
export { checkDetail };

export const checkInput = async(req:Request, res:Response, next:NextFunction) =>{
  const schema = joi.object({
    subject : joi.string().required(),
    semester : joi.string().required(),
    course : joi.string().required(),
    year : joi.number().required(),
  });
   const { error } = schema.validate(req.body);
   if( error ) {
    return res.status(200).json({message : "server error ",error})

  }
  next();
}

