import bcrypt from "bcrypt";
import config from "config";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import validator from "validator";

import UserInterface from "../../interfaces/user/user-interface";
import UserModelInterface from "../../interfaces/user/user-model-interface";
import passValidator from "../../services/auth/validate-password";
import Token from "./Token";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validateInput: (value: string): void => {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email Address");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    validateInput: (value: string) => {
      const validation = passValidator(value);
      if (!validation) {
        throw new Error(`Password does not meet requirements.`);
      }
    },
  },
  created: {
    type: Number,
    required: true,
  },
});

userSchema.pre<UserInterface>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }

  return next();
});

userSchema.methods.generateAccessToken = function (): string {
  try {
    const token: string = jwt.sign(
      { _id: this._id },
      config.get("jwt.secret"),
      {
        expiresIn: config.get("jwt.tokenLife"),
      },
    );

    return token;
  } catch (error) {
    return error;
  }
};

userSchema.methods.generateRefreshToken = async function (): Promise<string> {
  try {
    const refreshToken: string = jwt.sign(
      { _id: this._id },
      config.get("jwt.refreshSecret"),
      {
        expiresIn: config.get("jwt.refreshTokenLife"),
      },
    );

    const newTokenDocument = new Token({
      userId: this._id,
      refreshToken,
    });

    await newTokenDocument.save();

    return refreshToken;
  } catch (error) {
    return error;
  }
};

userSchema.statics.findByCredentials = async (
  email: string,
  password: string,
): Promise<UserInterface> => {
  try {
    const user: UserInterface | null = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid login credentials");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new Error("Invalid login credentials");
    }

    return user;
  } catch (error) {
    return error;
  }
};

const User: UserModelInterface = mongoose.model<
  UserInterface,
  UserModelInterface
>("User", userSchema);

export default User;
