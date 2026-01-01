import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../features/auth/auth.types";
import { mockUsers } from "../../mock/user";
import { saveAuth, clearAuth } from "../../features/auth/auth.storage";

export type Role = "ADMIN" | "EMPLOYEE";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  password: string;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      const foundUser = mockUsers.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );

      if (foundUser) {
        const { password, ...user } = foundUser;
        state.user = user;
        state.isAuthenticated = true;

        saveAuth(state);
      }
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      clearAuth();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
