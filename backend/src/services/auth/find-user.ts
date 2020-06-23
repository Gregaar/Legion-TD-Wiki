import UserInterface from "../../interfaces/user/user-interface";
import User from "../../models/user/User";

const findUser = async (id: string): Promise<UserInterface> => {
  try {
    const user = await User.findOne({ _id: id });

    if (!user) {
      throw new Error();
    }
    return user;
  } catch (error) {
    return error;
  }
};

export default findUser;
