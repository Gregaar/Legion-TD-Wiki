import config from "config";
import { verify } from "jsonwebtoken";

export default (token: string): any => {
  return verify(token, config.get("jwt.secret"), (error, decoded) => {
    if (error) {
      return "validation failed";
    }
    return decoded;
  });
};
