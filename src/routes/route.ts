import { Router } from "express";
import { getCourseName, getQn, getSubjectName } from "../controller/controller";
const router = Router();

router.get("/subQn", getQn); // route to get user
router.get("/subName", getSubjectName); // route to get subject name
router.get("/course", getCourseName);
export default router;
