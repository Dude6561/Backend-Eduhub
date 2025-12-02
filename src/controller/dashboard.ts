import { Request, Response } from "express";
const dashboard = (req: Request, res: Response) => {
  return res
    .status(500)
    .json({ message: "Successfully loged in to dashboard" });
};
export default dashboard;
