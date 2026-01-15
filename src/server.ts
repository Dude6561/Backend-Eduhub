import cors from "cors";
import express from "express";
import dashRoute from "./routes/dashRoute";
import loginRoute from "./routes/loginRoute";
import subjectRoute from "./routes/route";

const app = express();
const port = 3033;
app.use(cors());
app.use(express.json());

app.use("/subject", subjectRoute);
app.use("/auth", loginRoute);
app.use("/dashboard", dashRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
