import { User } from "../app/slices/authSlice";

export const mockUsers: (User & { password: string })[] = [
  {
    id: "1",
    name: "Main Admin",
    email: "admin@bugcaught.com",
    password: "admin123",
    role: "ADMIN",
  },
  {
    id: "2",
    name: "John Developer",
    email: "dev@bugcaught.com",
    password: "dev123",
    role: "EMPLOYEE",
  },
];
