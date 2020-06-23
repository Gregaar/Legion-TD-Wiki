import TokenInterface from "../../interfaces/user/token-interface";
import UserInterface from "../../interfaces/user/user-interface";
import Token from "../../models/user/Token";
import findUser from "./find-user";
import validRefresh from "./valid-refresh";

const renewTokens = async (
  refreshToken: string,
): Promise<{
  newToken: string;
  newRefresh: string;
  user: UserInterface;
  storedRefresh: TokenInterface;
}> => {
  try {
    const { _id }: { _id: string } = validRefresh(refreshToken);

<<<<<<< HEAD:backend/src/services/auth/renewTokens.ts
    console.log(_id);

    console.log(refreshToken);


=======
>>>>>>> fix: cookie issuing fix and add env variables to frontend:backend/src/services/auth/renew-tokens.ts
    if (!_id) {
      throw new Error("Invalid token");
    }
    const user = await findUser(_id);

    const storedRefresh = await Token.findOne({
      userId: _id,
      refreshToken,
    });

    if (!user || !storedRefresh) {
      throw new Error("Unable to find user");
    }

    const newToken: string = user.generateAccessToken();
    const newRefresh: string = await user.generateRefreshToken();

    return { newToken, newRefresh, user, storedRefresh };
  } catch (error) {
    return error.message;
  }
};

export default renewTokens;
