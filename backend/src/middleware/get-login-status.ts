import { NextFunction, Request, RequestHandler, Response } from "express";

import findUser from "../services/auth/find-user";
import validAccess from "../services/auth/valid-access";

const getLoginStatus: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const accessToken = req.cookies.access;

    // validate the access token
    const validatedToken = validAccess(accessToken);

    if (validatedToken === "validation failed") {
      return res
        .status(401)
        .json({ error: "You're not authorized to access this resource" });
    } else if (!req.user || !req.access) {
      //set these req properties if they're missing
      const user = await findUser(validatedToken._id);

      req.user = user;
      req.access = accessToken;
      if (req.cookies.refresh) {
        req.refresh = req.cookies.refresh;
      }

      return next();
    } else {
      return next();
    }
  } catch (error) {
    return res
      .status(401)
      .json({ error: "You're not authorized to access this resource" });
  }
};

export default getLoginStatus;
