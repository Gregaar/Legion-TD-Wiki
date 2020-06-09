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

router.get("/user/loginStatus", isAuth, (req, res) => {
  return res.json({ success: true, username: req.user.name });
});

router.post("/user/register", register);

router.post("/user/login", login);

router.post("/user/logout", isAuth, logout);

router.post("/user/logoutall", isAuth, logoutAll);

router.post("/user/changeemail", isAuth, changeEmail);

router.post("/user/changepassword", isAuth, changePassword);

export default (): Router => {
  logger.info("Registering 'User' routes...");

  return router;
};
