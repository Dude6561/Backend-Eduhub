import { Request, Response } from "express";
const dashboard = (req: Request, res: Response) => {
  return res.status(500).json({ message: "ok" });
};
export default dashboard;
