import jwt from "jsonwebtoken";
import {
  JWT_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
} from "../Secrates/enviorment";

export const generateAccessToken = (payload: object) => {
  try {
    if (
      JWT_SECRET ||
      ACCESS_TOKEN_EXPIRES_IN ||
      typeof ACCESS_TOKEN_EXPIRES_IN == "string"
    ) {
      return jwt.sign(payload, JWT_SECRET, {
        expiresIn: ACCESS_TOKEN_EXPIRES_IN as any,
      });
    }
  } catch (error) {
    throw new Error("Error generating access token");
  }
};

export const generateRefreshToken = (payload: object) => {
  if (
    JWT_REFRESH_SECRET &&
    REFRESH_TOKEN_EXPIRES_IN &&
    typeof REFRESH_TOKEN_EXPIRES_IN == "string"
  ) {
    return jwt.sign(payload, JWT_REFRESH_SECRET, {
      expiresIn: REFRESH_TOKEN_EXPIRES_IN as any,
    });
  }
};
