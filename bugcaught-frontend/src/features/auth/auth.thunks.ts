import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, registerApi } from "./auth.api";
import { RegisterPayload, LoginPayload } from "./auth.api";

export const login = createAsyncThunk(
  "auth/login",
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      return await loginApi(payload);
    } catch (err: any) {
        console.log("Error during login:", err);
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (payload: RegisterPayload, { rejectWithValue }) => {
    try {
      return await registerApi(payload);
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
    }
  }
);
