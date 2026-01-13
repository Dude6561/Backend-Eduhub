import joi from "joi";
import { Response, Request, NextFunction } from "express";
import { login } from "../controller/login";

const signupValidation = (req: Request, res: Response, next: NextFunction) => {
  const schema = joi.object({
    name: joi.string().min(3).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(20).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(200).json({ message: "badrequest", error });
  }
  next();
};

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).max(15).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(200).json({ message: "Bad request", error });
  }

  next();
};

export { signupValidation, loginValidation };
