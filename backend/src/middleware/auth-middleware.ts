import { NextFunction, Request, RequestHandler, Response } from "express";

import getLoginStatus from "./get-login-status";
import refreshTokens from "./refresh-tokens";

const authMiddleware: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const accessToken = req.cookies.access;
    const refreshToken = req.cookies.refresh;

    if (accessToken) {
      await getLoginStatus(req, res, next);
      return;
    } else if (!accessToken && refreshToken) {
      await refreshTokens(req, res, next);
      return;
    } else if (!accessToken && !refreshToken) {
      return res
        .status(401)
        .json({ error: "You're not authorized to access this resource" });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ error: "You're not authorized to access this resource" });
  }
};

export default authMiddleware;
