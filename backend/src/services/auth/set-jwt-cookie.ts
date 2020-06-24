import config from "config";
import { Response } from "express";

const setJwtCookie = (
  res: Response,
  cookieName: string,
  token: string,
): Response => {
  const cookieConfig =
    cookieName === "access" ? "jwt.tokenLife" : "jwt.refreshTokenLife";

  res.cookie(cookieName, token, {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + +config.get<string>(cookieConfig)),
    maxAge: +config.get<string>(cookieConfig),
    sameSite: true,
    path: "/",
    domain: config.get("jwt.domain"),
  });

  return res;
};

export default setJwtCookie;
