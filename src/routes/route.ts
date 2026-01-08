import { Router } from "express";
import { getCourseName, getQn, getSubjectName } from "../controller/controller";
import { Course } from "../controller/dashboard";
const router = Router();

router.get("/subQn", getQn); // route to get user
router.get("/subName", getSubjectName); // route to get subject name
export default router;
