import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string({ required_error: "Please write your name" }),
  email: z.string({ required_error: "Please write your email" }),
  password: z.string({ required_error: "Please write a unique password" }),
});

export const loginUserSchema = z.object({
  email: z.string({ required_error: "Please write your email" }),
  password: z.string({ required_error: "Please write your password" }),
});
