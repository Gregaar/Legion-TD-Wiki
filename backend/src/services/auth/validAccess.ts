import config from "config";
import jwt from "jsonwebtoken";

export default (token: string): any => {
  return jwt.verify(token, config.get("jwt.secret"), (error, decoded): any => {
    if (error) {
      return error.message;
    }
    return decoded;
  });
};
