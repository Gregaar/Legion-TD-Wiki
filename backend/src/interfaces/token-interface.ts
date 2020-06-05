import mongoose from "mongoose";

export default interface TokenInterface extends mongoose.Document {
  userId: string;
  refreshToken: string;
  createdAt: Date;
}
