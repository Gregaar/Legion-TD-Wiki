import bcrypt from "bcrypt";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import validator from "validator";

import Token from "../../models/user/Token";
import User from "../../models/user/User";
import clearJwtCookie from "../../services/auth/clear-jwt-cookie";
import findStoredToken from "../../services/auth/find-stored-token";
import resetPassEmail from "../../services/auth/reset-pass-email";
import setJwtCookie from "../../services/auth/set-jwt-cookie";
import passValidator from "../../services/auth/validate-password";
import usernameValidator from "../../services/auth/validate-username";

export const register: RequestHandler<{
  name: string;
  email: string;
  password: string;
}> = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    }: { name: string; email: string; password: string } = req.body;

    const existingUser = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (existingUser) {
      return res.status(500).json({
        error: "Email already registered.",
      });
    }

    if (!usernameValidator(name)) {
      return res.status(500).json({
        error: "Invalid Username.",
      });
    }
    const user = new User({
      name: `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
      email: email.trim().toLowerCase(),
      password,
      created: Date.now(),
    });

    await user.save();

    const accessToken = user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    setJwtCookie(res, "access", accessToken);
    setJwtCookie(res, "refresh", refreshToken);

    return res.status(201).json({ success: true, username: user.name });
  } catch (error) {
    return res.status(400).json({ error: "Unable to register user" });
  }
};

export const login: RequestHandler<{
  email: string;
  password: string;
}> = async (req, res) => {
  try {
    const { email, password }: { email: string; password: string } = req.body;

    const user = await User.findByCredentials(
      email.trim().toLowerCase(),
      password,
    );

    if (!user) {
      throw new Error();
    }

    const accessToken: string = user.generateAccessToken();
    const refreshToken: string = await user.generateRefreshToken();

    setJwtCookie(res, "access", accessToken);
    setJwtCookie(res, "refresh", refreshToken);

    return res.status(200).json({ success: true, username: user.name });
  } catch (error) {
    return res.status(400).json({ error: "Invalid email or password." });
  }
};

export const logout: RequestHandler = async (req, res) => {
  try {
    if (!req.refresh && req.access) {
      clearJwtCookie(res, "refresh");
      clearJwtCookie(res, "access");
      return res.status(200).send();
    }

    const storedToken = await findStoredToken(req.user._id, req.refresh);

    if (!storedToken) {
      clearJwtCookie(res, "access");
      clearJwtCookie(res, "refresh");
      return res.status(200).send();
    }

    clearJwtCookie(res, "access");
    clearJwtCookie(res, "refresh");

    await storedToken.remove();

    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ error: "Token provided is invalid" });
  }
};

export const logoutAll: RequestHandler = async (req, res) => {
  try {
    await Token.deleteMany({ userId: req.user?._id });

    clearJwtCookie(res, "access");
    clearJwtCookie(res, "refresh");

    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ error: "Token provided is invalid" });
  }
};

export const deleteUser: RequestHandler = async (req, res) => {
  try {
    await req.user?.remove();

    await Token.deleteMany({ userId: req.user?._id });

    clearJwtCookie(res, "access");
    clearJwtCookie(res, "refresh");

    return res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Unable to delete account" });
  }
};

export const changeEmail: RequestHandler<{ email: string }> = async (
  req,
  res,
) => {
  try {
    const { email } = req.body;

    if (email === req.user?.email) {
      return res.status(400).json({
        success: false,
        message: "Email entered is the same as the email already used",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email entered",
      });
    }

    if (req.user) {
      req.user.email = email;
    }

    await req.user?.save();

    return res.status(200).json({ success: true, message: "Email updated" });
  } catch (error) {
    return res.status(500).json({ error: "Unable to change email address" });
  }
};

export const changePassword: RequestHandler<{ password: string }> = async (
  req,
  res,
) => {
  try {
    if (req.user) {
      const { password } = req.body;

      const isPasswordMatch = await bcrypt.compare(password, req.user.password);

      if (isPasswordMatch) {
        return res.status(400).json({
          success: false,
          error: "Entered password is the same as existing password",
        });
      }

      const validation: string[] | boolean = passValidator(password);

      if (!validation) {
        return res.status(400).json({
          success: false,
          error: `Password does not meet requirements.`,
        });
      }

      req.user.password = password;

      await req.user.save();

      await Token.findOneAndDelete({
        userId: req.user._id,
        refreshToken: req.refresh,
      });

      clearJwtCookie(res, "access");
      clearJwtCookie(res, "refresh");

      return res
        .status(200)
        .json({ success: true, message: "Password updated" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Unable to change password" });
  }
};

export const forgottenPasswordEmail: RequestHandler = async (req, res) => {
  const { email }: { email: string } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  try {
    const forgottenUser = await User.findOne({ email: email.toLowerCase() });

    if (!forgottenUser) {
      return res.status(400).json({ error: "No such email exists." });
    }

    const payload = {
      _id: forgottenUser._id,
      email: forgottenUser.email.toLowerCase(),
    };

    const resetToken: string = jwt.sign(
      payload,
      `${forgottenUser.password} + ${forgottenUser.created}`,
    );

    const resetLink = `https://wiki.legion-td.com/resetpassword/${payload._id}/${resetToken}`;
    resetPassEmail(forgottenUser.name, forgottenUser.email, resetLink);

    res.status(200).json({ message: "Reset email sent." });
  } catch (error) {
    return res.status(500).json({ error: "Internal error, please try again." });
  }
};

export const confirmEmailResetToken: RequestHandler<{
  id: string;
  token: string;
}> = async (req, res) => {
  try {
    const foundUser = await User.findOne({ _id: req.params.id });

    if (!foundUser) {
      return res.status(403).json({ message: "Invalid reset URL" });
    }

    const verifiedToken: any = jwt.verify(
      req.params.token,
      `${foundUser.password} + ${foundUser.created}`,
      (error, decoded) => {
        if (error) {
          return false;
        } else {
          return decoded;
        }
      },
    );

    if (!verifiedToken) {
      return res.status(403).json({ message: "Invalid reset URL" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ message: "Invalid reset URL" });
  }
};

export const resetPasswordFromEmail: RequestHandler = async (req, res) => {
  try {
    const {
      id,
      token,
      password,
    }: { id: string; token: string; password: string } = req.body;

    const foundUser = await User.findOne({ _id: id });

    if (!foundUser) {
      return res.status(403).json({ message: "Invalid reset URL" });
    }

    const verifiedToken: any = jwt.verify(
      token,
      `${foundUser.password} + ${foundUser.created}`,
      (error, decoded) => {
        if (error) {
          return false;
        } else {
          return decoded;
        }
      },
    );

    if (!verifiedToken) {
      return res.status(403).json({ message: "Invalid reset URL" });
    }

    const validation: string[] | boolean = passValidator(password);

    if (!validation) {
      return res.status(400).json({
        success: false,
        message: `Password does not meet requirements.`,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, foundUser.password);

    if (isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Entered password is the same as existing password",
      });
    }

    foundUser.password = password;

    await foundUser.save();

    return res.status(200).json({ success: true, message: "Password changed" });
  } catch (error) {
    return res.status(500).json({ message: "Invalid reset URL" });
  }
};
