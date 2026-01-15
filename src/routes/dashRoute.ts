import { Router } from "express";
import multer from "multer";
import { Course, Detail } from "../controller/dashboard";
import { checkCourse, checkDetail } from "../middleware/typeDash";
const router = Router();

router.get("/course", checkCourse, Course);
router.post("/detail",checkDetail,Detail);

const storage = multer.memoryStorage();
const upload = multer({storage, limits:{fileSize: 6* 1024 * 1024, files:2}})
const uploadImage = upload.fields([{name:'image1', maxCount:1}, {name:'image2', maxCount:1}])
export default router;
