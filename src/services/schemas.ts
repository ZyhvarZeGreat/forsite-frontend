import { z, string } from "zod";

/* This TypeScript code snippet is defining a schema using the Zod library for validating signup data.
Here's a breakdown of what the schema is doing: */

export const loginSchema = z.object({
  email: string().email(),
  password: z.string().min(8),
});

export const signupSchema = z.object({
  first_name: z.string().min(8, {
    message: "First Name must contain at least 8 characters",
  }),
  last_name: z.string().min(8, {
    message: "Last Name must contain at least 8 characters",
  }),
  email: z.string().email(),
  // Other fields can go here

  password: z.string().min(8),
  password_confirmation: z.string().min(8),
});
