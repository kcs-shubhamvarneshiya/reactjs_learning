import dotenv from "dotenv";
dotenv.config();

export const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/bugcaught_db";
export const JWT_SECRET: string = process.env.JWT_SECRET || "your_jwt_secret";
export const JWT_REFRESH_SECRET: string =
  process.env.JWT_REFRESH_SECRET || "your_jwt_refresh_secret";
export const PORT = process.env.PORT || 5000;
export const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
export const SERVER_URL = process.env.SERVER_URL || `http://localhost:${PORT}`;
export const ACCESS_TOKEN_EXPIRES_IN: string =
  process.env.ACCESS_TOKEN_EXPIRES_IN || "15m";
export const REFRESH_TOKEN_EXPIRES_IN: string =
  process.env.REFRESH_TOKEN_EXPIRES_IN || "7d";
export const NODE_ENV: string = process.env.NODE_ENV || "development";
