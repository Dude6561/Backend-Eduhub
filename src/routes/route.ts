import { Router } from "express";
import { getSubject, getSubjectName } from "../controller/controller";
const router = Router();

router.get("/subDetail", getSubject); // route to get user
router.get("/subName", getSubjectName); // route to get subject name
export default router;
