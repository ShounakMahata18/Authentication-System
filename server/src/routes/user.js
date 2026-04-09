import { Router } from "express";

import {
  registerUser,
  verifyUser,
  loginUser,
  verifyOTP,
  myProfile,
  refreshToken,
  logoutUser,
  refreshCSRFToken,
  adminController,
} from "../controllers/user.js";
import { authorizedAdmin, isAuth } from "../middlewares/isAuth.js";
import { verifyCSRFToken } from "../middlewares/csrfMiddleware.js";

const router = Router();

// Routes
router.post("/register", registerUser);
router.post("/verify/:token", verifyUser);
router.post("/login", loginUser);
router.post("/verify-otp", verifyOTP);
router.get("/me", isAuth, myProfile);
router.post("/refresh", refreshToken);
router.post("/logout", isAuth, verifyCSRFToken, logoutUser);
router.post("/refresh-csrf", isAuth, refreshCSRFToken);
router.post("/admin", isAuth, authorizedAdmin, adminController);

export default router;
