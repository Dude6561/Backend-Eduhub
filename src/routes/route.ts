import { Router } from "express";
import { getSubject } from "../controller/controller";
const router = Router();

router.post("/subDetail", getSubject); // route to get user
export default router;
