import api from "../../api/axios";
import { API_ENDPOINTS } from "../../utils/constants";

export interface RegisterPayload {
  name: string;
  email: string;
  role: "ADMIN" | "EMPLOYEE";
  password: string;
  department?: string;
  skills?: string[];
}

export type LoginPayload = Pick<RegisterPayload, "email" | "password">;

export const loginApi = async (data: LoginPayload) => {
  console.log("Login API called with data:", data);
  const res = await api.post(API_ENDPOINTS.LOGIN, data);
  return res.data;
};

export const registerApi = async (data: RegisterPayload) => {
  const res = await api.post(API_ENDPOINTS.REGISTER, data);
  return res.data;
};
