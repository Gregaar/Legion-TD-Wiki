import Token from "../../models/user/Token";
import User from "../../models/user/User";
import validRefresh from "./validRefresh";

const renewTokens = async (
  refreshToken: string,
): Promise<{ newToken: string; newRefresh: string }> => {
  try {
    const { _id }: { _id: string } = validRefresh(refreshToken);

    console.log(_id);

    console.log(refreshToken);


    if (!_id) {
      throw new Error("Invalid token");
    }
    const user = await User.findOne({
      _id,
    });

    const storedRefresh = await Token.findOne({
      userId: _id,
      refreshToken: refreshToken,
    });

    console.log(user);
    console.log(storedRefresh);

    if (!user || !storedRefresh) {
      throw new Error("Unable to find user");
    }

    const newToken: string = user.generateAccessToken();
    const newRefresh: string = await user.generateRefreshToken();

    console.log(newToken);
    console.log(newRefresh);

    await storedRefresh.remove();

    return { newToken, newRefresh };
  } catch (error) {
    return error.message;
  }
};

export default renewTokens;
