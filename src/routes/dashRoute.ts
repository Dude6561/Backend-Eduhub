import { Router } from "express";
import multer from "multer";
import { Course, Detail, Input } from "../controller/dashboard";
import { checkCourse, checkDetail, checkInput } from "../middleware/typeDash";
const router = Router();

router.get("/course", checkCourse, Course);
router.post("/detail", checkDetail, Detail);
// for inputting images into supabase s3 bucket
//multer itself is a middleware
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 6 * 1024 * 1024, files: 2 },
});
const uploadImage = upload.fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
]);

router.post("/input", uploadImage, checkInput, Input);
export default router;
