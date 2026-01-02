export interface UserPayload {
  name: string;
  email: string;
  password: string;
  department?: string;
  role?: string;
  skills?: string[];
}

export type Loginpayload = Pick<UserPayload, "email" | "password">;
