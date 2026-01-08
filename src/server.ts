import express from "express";
import cors from "cors";
import subjectRoute from "./routes/route";
import loginRoute from "./routes/loginRoute";
import dashRoute from "./routes/dashRoute";

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
