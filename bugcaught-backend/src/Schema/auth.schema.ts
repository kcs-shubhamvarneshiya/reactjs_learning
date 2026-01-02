import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(2)
      .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
    email: z.email(),
    password: z
      .string()
      .min(6)
      .regex(/.*[A-Z].*/, "Password must contain at least one uppercase letter")
      .regex(/.*[0-9].*/, "Password must contain at least one number")
      .regex(
        /.*[!@#$%^&*(),.?":{}|<>].*/,
        "Password must contain at least one special character"
      ),
    department: z.string().optional(),
    role: z.string().optional(),
    skills: z.array(z.string()).optional(),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.email(),
    password: z.string(),
  }),
});
