import express from "express";

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const port = 3004;

app.get("/subject", async (req: Request, res: Response) => {
  const response = await prisma.subDetail.findMany({
    where: {
      courseId: 1,
      subjectName: "Computer Programming",
    },
  });

  return res.status(200).json(response);
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
