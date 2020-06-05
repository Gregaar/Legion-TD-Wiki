import mongoose from "mongoose";

import TokenInterface from "../../interfaces/token-interface";

const tokenSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600 * 24,
  },
});

const Token = mongoose.model<TokenInterface>("Token", tokenSchema);

export default Token;
