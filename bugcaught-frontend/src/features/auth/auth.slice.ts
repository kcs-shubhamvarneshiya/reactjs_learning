import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../features/auth/auth.thunks";
import { AuthState } from "../../types/auth";
import { saveAuth, clearAuth } from "../../features/auth/auth.storage";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      clearAuth();
    },
    hydrateAuth(_, action) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        saveAuth(state);
      })
      .addCase(register.fulfilled, (state) => {
        // Admin registers employees – no auto login
      });
  },
});

export const { logout,  } = authSlice.actions;
export default authSlice.reducer;
