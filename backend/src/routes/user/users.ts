import { Router } from "express";

import {
  changeEmail,
  changePassword,
  confirmEmailResetToken,
  forgottenPasswordEmail,
  login,
  logout,
  logoutAll,
  register,
  resetPasswordFromEmail,
} from "../../controllers/user/users";
import { logger } from "../../logger";
import checkAuth from "../../middleware/auth/check-auth";

const router = Router();

router.post("/api/user/loginStatus", checkAuth, (req, res) => {
  return res.status(200).json({ success: true, username: req.user.name });
});

router.post("/api/user/register", register);

router.post("/api/user/login", login);

router.post("/api/user/logout", checkAuth, logout);

router.post("/api/user/logoutall", checkAuth, logoutAll);

router.post("/api/user/changeemail", checkAuth, changeEmail);

router.post("/api/user/changepassword", checkAuth, changePassword);

router.post("/api/user/forgottenpassword", forgottenPasswordEmail);

router.get("/api/user/resetpassword/:id/:token", confirmEmailResetToken);

router.post("/api/user/handlepasswordreset", resetPasswordFromEmail);

export default (): Router => {
  logger.info("Registering 'User' routes...");

  return router;
};
