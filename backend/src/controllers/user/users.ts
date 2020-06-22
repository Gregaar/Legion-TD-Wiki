import bcrypt from "bcrypt";
import config from "config";
import { RequestHandler } from "express";
import validator from "validator";

import Token from "../../models/user/Token";
import User from "../../models/user/User";
import passValidator from "../../services/auth/validatePassword";

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

    const user = new User({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
    });

    await user.save();

    const accessToken = user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    res.cookie("access", accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 900000,
      sameSite: true,
      domain: config.get("jwt.tokenLife"),
      path: "/",
    });
    res.cookie("refresh", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: config.get("jwt.refreshTokenLife"),
      sameSite: true,
      domain: config.get("jwt.domain"),
      path: "/",
    });

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

    console.log(accessToken);
    console.log(refreshToken);

    res.cookie("access", accessToken, {
      path: "/",
      domain: config.get("jwt.domain"),
      httpOnly: true,
      secure: true,
      maxAge: config.get("jwt.tokenLife"),
      sameSite: true,
    });

    res.cookie("refresh", refreshToken, {
      path: "/",
      domain: config.get("jwt.domain"),
      httpOnly: true,
      secure: true,
      maxAge: config.get("jwt.refreshTokenLife"),
      sameSite: true,
    });

    return res.status(200).json({ success: true, username: user.name });
  } catch (error) {
    return res.status(400).json({ error: "Invalid email or password." });
  }
};

export const logout: RequestHandler = async (req, res) => {
  try {
    const storedToken = await Token.findOne({
      userId: req.user?._id,
      refreshToken: req.refresh,
    });

    if (!storedToken) {
      throw new Error("Unable to find token");
    }

    await storedToken.remove();

    res.clearCookie("access", {
      path: "/",
      domain: config.get("jwt.domain"),
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
    res.clearCookie("refresh", {
      path: "/",
      domain: config.get("jwt.domain"),
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ error: "Token provided is invalid" });
  }
};

export const logoutAll: RequestHandler = async (req, res) => {
  try {
    await Token.deleteMany({ userId: req.user?._id });

    res.clearCookie("access");
    res.clearCookie("refresh");

    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ error: "Token provided is invalid" });
  }
};

export const deleteUser: RequestHandler = async (req, res) => {
  try {
    await req.user?.remove();

    await Token.deleteMany({ userId: req.user?._id });

    res.clearCookie("access", {
      path: "/",
      domain: config.get("jwt.domain"),
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
    res.clearCookie("refresh", {
      path: "/",
      domain: config.get("jwt.domain"),
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

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

      res.clearCookie("access", {
        path: "/",
        domain: config.get("jwt.domain"),
        httpOnly: true,
        secure: true,
        sameSite: true,
      });

      res.clearCookie("refresh", {
        path: "/",
        domain: config.get("jwt.domain"),
        httpOnly: true,
        secure: true,
        sameSite: true,
      });

      await Token.findOneAndDelete({
        userId: req.user._id,
        refreshToken: req.refresh,
      });

      return res
        .status(200)
        .json({ success: true, message: "Password updated" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Unable to change password" });
  }
};
