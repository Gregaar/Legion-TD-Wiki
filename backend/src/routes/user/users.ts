import { Router } from "express";

import {
  changeEmail,
  changePassword,
  login,
  logout,
  logoutAll,
  register,
} from "../../controllers/user/users";
import { logger } from "../../logger";
import authMiddleware from "../../middleware/auth-middleware";

const router = Router();

router.post("/api/user/loginStatus", authMiddleware, (req, res) => {
  return res.status(200).json({ success: true, username: req.user.name });
});

router.post("/api/user/register", register);

router.post("/api/user/login", login);

router.post("/api/user/logout", authMiddleware, logout);

router.post("/api/user/logoutall", authMiddleware, logoutAll);

router.post("/api/user/changeemail", authMiddleware, changeEmail);

router.post("/api/user/changepassword", authMiddleware, changePassword);

export default (): Router => {
  logger.info("Registering 'User' routes...");

  return router;
};
