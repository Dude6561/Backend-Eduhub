import express from "express";
import cors from "cors";
import subjectRoute from "./routes/route";
import loginRoute from "./routes/loginRoute";

const app = express();
const port = 3031;
app.use(cors());
app.use(express.json());

app.use("/subject", subjectRoute);
app.use("/auth", loginRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
