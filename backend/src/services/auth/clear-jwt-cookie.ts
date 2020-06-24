import config from "config";
import { Response } from "express";

const clearJwtCookie = (res: Response, cookieName: string): Response => {
  res.clearCookie(cookieName, {
    path: "/",
    domain: config.get("jwt.domain"),
    httpOnly: true,
    secure: true,
    sameSite: true,
  });

  return res;
};

export default clearJwtCookie;
