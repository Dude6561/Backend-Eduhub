import { Router } from "express";
import { Course } from "../controller/dashboard";
import { checkCourse } from "../middleware/typeDash";
const router = Router();
router.get("/course", checkCourse, Course);
export default router;
