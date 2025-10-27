import { Router } from "express";
import { getSubject, getSubjectName } from "../controller/controller";
const router = Router();

router.post("/subDetail", getSubject); // route to get user
router.post("/subName", getSubjectName); // route to get subject name
export default router;
