import { NextFunction, Request, RequestHandler, Response } from "express";

import findStoredToken from "../../services/auth/find-stored-token";
import findUser from "../../services/auth/find-user";
import setJwtCookie from "../../services/auth/set-jwt-cookie";
import validRefresh from "../../services/auth/valid-refresh";

const refreshTokens: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const refresh = req.cookies.refresh;
    // validate the refresh token
    const validatedRefresh = validRefresh(refresh);

    if (validatedRefresh === "validation failed") {
      return res
        .status(401)
        .json({ error: "You're not authorized to access this resource" });
    }
    // find the user the token belongs to and the stored token itself
    const user = await findUser(validatedRefresh._id);
    const storedToken = await findStoredToken(validatedRefresh._id, refresh);

    if (!user || !storedToken) {
      return res
        .status(401)
        .json({ error: "You're not authorized to access this resource" });
    }
    // create a new access and a new refresh token
    const newToken: string = user.generateAccessToken();
    const newRefresh: string = await user.generateRefreshToken();

    // set these tokens to be sent in the next response
    setJwtCookie(res, "access", newToken);
    setJwtCookie(res, "refresh", newRefresh);

    // remove the old stored token
    await storedToken.remove();

    // set these properties on the req object.
    req.user = user;
    req.access = newToken;
    req.refresh = newRefresh;

    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: "You're not authorized to access this resource" });
  }
};

export default refreshTokens;
