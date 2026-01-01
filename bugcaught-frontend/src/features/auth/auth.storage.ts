import { AuthState } from "./auth.types";

const AUTH_KEY = "bugcaught_auth";

export const saveAuth = (state: AuthState) => {
  console.log("Saving auth state:", state);
  localStorage.setItem(AUTH_KEY, JSON.stringify(state));
};

export const loadAuth = (): { auth: AuthState } | undefined => {
  const data = localStorage.getItem(AUTH_KEY);
  if (!data) return undefined;

  try {
    const authState: AuthState = JSON.parse(data);
    return { auth: authState };
  } catch {
    return undefined;
  }
};

export const clearAuth = () => {
  localStorage.removeItem(AUTH_KEY);
};
