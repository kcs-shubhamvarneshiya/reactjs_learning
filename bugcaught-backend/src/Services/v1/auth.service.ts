import bcrypt from "bcrypt";
import { User } from "../../Model/user.model";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../Utils/JsonWebTokens/jwt";
import { loginSchema, registerSchema } from "../../Schema/auth.schema";
import { message } from "src/Utils/Secrates/constants";
import { UserPayload, Loginpayload } from "../../Utils/types/types";

export class AuthService {

  /**
   * 
   * @param data 
   * @returns 
   */
  static async register(data: UserPayload) {
    try {
      registerSchema.parse({ body: data });

      const existingUser = await User.findOne({ email: data.email });
      if (existingUser) {
        throw new Error(message.USER_ALREADY_EXISTS);
      }
      console.log("Skills:", data.skills);
      const hashedPassword = await bcrypt.hash(data.password, 10);

      const user = await User.create({
        name: data.name,
        email: data.email,
        department: data?.department,
        role: data?.role,
        skills: data?.skills,
        password: hashedPassword,
      });

      const accessToken = generateAccessToken({ userId: user._id });
      const refreshToken = generateRefreshToken({ userId: user._id });

      user.refreshToken = refreshToken;
      await user.save();

      return {
        userId: user._id,
        accessToken,
        refreshToken,
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * 
   * @param data  
   * @returns 
   */
  static async login(data: Loginpayload) {
    try {
      loginSchema.parse({ body: data });

      const user = await User.findOne({ email: data.email });
      if (!user) {
        throw new Error(message.USER_NOT_FOUND);
      }

      const isMatch = await bcrypt.compare(data.password, user.password);
      if (!isMatch) {
        throw new Error(message.INVALID_CREDENTIALS);
      }

      const accessToken = generateAccessToken({ userId: user._id });
      const refreshToken = generateRefreshToken({ userId: user._id });

      user.refreshToken = refreshToken;
      await user.save();

      return {
        userId: user._id,
        accessToken,
        refreshToken,
      };
    } catch (error) {
      throw error;
    }
  }
}
