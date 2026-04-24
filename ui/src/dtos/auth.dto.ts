import { z } from "zod";

const userLoginSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

const userSignupSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters long" }),
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" }),
});

export default { userLoginSchema, userSignupSchema };
