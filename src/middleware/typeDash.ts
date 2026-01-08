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
