import Token from "../../models/auth/Token";
import User from "../../models/auth/User";
import validRefresh from "./validRefresh";

const renewTokens = async (
  refreshToken: string,
): Promise<{ newToken: string; newRefresh: string }> => {
  try {
    const { _id }: { _id: string } = validRefresh(refreshToken);

    if (!_id) {
      throw new Error("Invalid token");
    }
    const user = await User.findOne({
      _id,
    });

    const storedRefresh = await Token.findOne({
      userId: _id,
      refreshToken,
    });

    if (!user || !storedRefresh) {
      throw new Error("Unable to find user");
    }

    const newToken: string = await user.generateAccessToken();
    const newRefresh: string = await user.generateRefreshToken();

    storedRefresh.remove();

    return { newToken, newRefresh };
  } catch (error) {
    return error.message;
  }
};

export default renewTokens;
