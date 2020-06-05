import { Model } from "mongoose";

import UserInterface from "./user-interface";

// for model statics
export default interface UserModelInterface extends Model<UserInterface> {
  findByCredentials(
    email: string,
    password: string,
  ): Promise<UserInterface> | null;
}
