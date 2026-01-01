import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["ADMIN", "MANAGER", "DEVELOPER", "TESTER"],
      default: "DEVELOPER",
    },
    refreshToken: { type: String },
    department: { type: String },
    skills: [{ type: String }],
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
