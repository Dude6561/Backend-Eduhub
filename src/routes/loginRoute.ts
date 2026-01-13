import { Router } from "express";
import { login, signup } from "../controller/login";
import {
  loginValidation,
  signupValidation,
} from "../middleware/authValidation";
import dashboard from "../controller/dashboard";
import { jwtAuth } from "../middleware/jwtAuth";
const router = Router();
router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);
router.get("/dashboard", jwtAuth, dashboard);

export default router;
