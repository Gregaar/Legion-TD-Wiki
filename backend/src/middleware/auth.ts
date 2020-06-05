import config from "config";
import { NextFunction, Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";

import User from "../models/user/User";
import renewTokens from "../services/auth/renewTokens";

const isAuth: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let token = req.cookies.access;
    let refresh = req.cookies.refresh;

    if (!token && refresh) {
      const { newToken, newRefresh } = await renewTokens(refresh);

      if (!newToken || !newRefresh) {
        throw new Error("Unable to generate new tokens");
      }

      token = newToken;
      refresh = newRefresh;

      res.cookie("access", token, {
        httpOnly: true,
        secure: true,
        maxAge: 900000,
        sameSite: true,
        path: "/",
        domain: config.get("jwt.domain"),
      });

      res.cookie("refresh", refresh, {
        httpOnly: true,
        secure: true,
        maxAge: 86400000,
        sameSite: true,
        path: "/",
        domain: config.get("jwt.domain"),
      });
    }

    const data = <any>jwt.verify(
      token,
      config.get("jwt.secret"),
      (error: any, decode: any) => {
        if (error) {
          return error.message;
        }
        return decode;
      },
    );

    const user = await User.findOne({ _id: data._id });

    if (!user) {
      throw new Error("Unable to find user");
    }

    req.user = user;
    req.refresh = refresh;
    req.access = token;

    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: "You're not authorized to access this resource" });
  }
};

export default isAuth;
