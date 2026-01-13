import { Router } from "express";
import { Course, Detail } from "../controller/dashboard";
import { checkCourse, checkDetail } from "../middleware/typeDash";

const router = Router();
router.get("/course", checkCourse, Course);
router.post("/detail",checkDetail,Detail);
export default router;
