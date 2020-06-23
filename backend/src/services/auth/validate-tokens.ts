import UserInterface from "../../interfaces/user/user-interface";
import findUser from "./find-user";
import validAccess from "./valid-access";
import validRefresh from "./valid-refresh";

const validateTokens = async (
  access: string,
  refresh: string,
): Promise<UserInterface> => {
  try {
    const { _id: accessUserId }: { _id: string } = validAccess(access);
    const { _id: refreshUserId }: { _id: string } = validRefresh(refresh);

    if (!refreshUserId || !accessUserId) {
      throw new Error();
    } else if (refreshUserId !== accessUserId) {
      throw new Error();
    }

    const foundUser = await findUser(refreshUserId);

    if (!foundUser) {
      throw new Error();
    }

    return foundUser;
  } catch (error) {
    return error;
  }
};

export default validateTokens;
