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
import isAuth from "../../middleware/auth";

const router = Router();

router.get("/api/user/loginStatus", isAuth, (req, res) => {
  console.log("COOKIES SET - SENDING TO CLIENT");
  return res.status(200).json({ success: true, username: req.user.name });
});

router.post("/api/user/register", register);

router.post("/api/user/login", login);

router.post("/api/user/logout", isAuth, logout);

router.post("/api/user/logoutall", isAuth, logoutAll);

router.post("/api/user/changeemail", isAuth, changeEmail);

router.post("/api/user/changepassword", isAuth, changePassword);

export default (): Router => {
  logger.info("Registering 'User' routes...");

  return router;
};
