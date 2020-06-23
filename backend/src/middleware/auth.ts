import config from "config";
import { NextFunction, Request, RequestHandler, Response } from "express";

import renewTokens from "../services/auth/renew-tokens";
import validateTokens from "../services/auth/validate-tokens";

const isAuth: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.access;

    const refresh = req.cookies.refresh;

    if (!token && refresh) {
      const { newToken, newRefresh, user, storedRefresh } = await renewTokens(
        refresh,
      );

      if (!newToken || !newRefresh || !user || !storedRefresh) {
        throw new Error();
      }

      res.cookie("access", newToken, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + +config.get<string>("jwt.tokenLife")),
        maxAge: +config.get<string>("jwt.tokenLife"),
        sameSite: true,
        path: "/",
        domain: config.get("jwt.domain"),
      });

      res.cookie("refresh", newRefresh, {
        httpOnly: true,
        secure: true,
        expires: new Date(
          Date.now() + +config.get<string>("jwt.refreshTokenLife"),
        ),
        maxAge: +config.get<string>("jwt.refreshTokenLife"),
        sameSite: true,
        path: "/",
        domain: config.get("jwt.domain"),
      });

      await storedRefresh.remove();

      req.user = user;
      req.refresh = newRefresh;
      req.access = newToken;

      res.json({message: "tokens refreshed"});
      
      return next();
    } else if (token && refresh && !req.user && !req.refresh && !req.access) {
      const user = await validateTokens(token, refresh);

      req.user = user;
      req.access = token;
      req.refresh = refresh;

      return next();
    } else if (token && !refresh) {
      throw new Error();
    } else if (!token && !refresh) {
      throw new Error();
    } else {
      return next();
    }
  } catch (error) {
    return res
      .status(401)
      .json({ error: "You're not authorized to access this resource" });
  }
};

export default isAuth;
