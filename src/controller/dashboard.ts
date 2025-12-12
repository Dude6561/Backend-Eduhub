import { Request, Response } from "express";
const dashboard = (req: Request, res: Response) => {
  return res.status(200).json({ message: "ok" });
};
export default dashboard;
