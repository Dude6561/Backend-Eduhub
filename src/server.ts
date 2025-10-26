import express from "express";
import cors from "cors";
import subjectRoute from "./routes/route";

const app = express();
const port = 3008;
app.use(cors());
app.use(express.json());

app.use("/subject", subjectRoute);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
