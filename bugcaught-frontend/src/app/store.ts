import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { loadAuth } from "../features/auth/auth.storage";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
  preloadedState: loadAuth(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
