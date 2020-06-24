import TokenInterface from "../../interfaces/user/token-interface";
import Token from "../../models/user/Token";

const findStoredToken = async (
  id: string,
  token: string,
): Promise<TokenInterface> => {
  const storedToken = await Token.findOne({
    userId: id,
    refreshToken: token,
  });

  if (!storedToken) {
    throw new Error("Unable to find stored token");
  }

  return storedToken;
};

export default findStoredToken;
