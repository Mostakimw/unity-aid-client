import { z } from "zod";

export const createDonationSchema = z.object({
  image: z.string({ required_error: "Image URL is required" }),
  title: z.string({ required_error: "Title is required" }),
  category: z.string({ required_error: "Category is required" }),
  amount: z.string({ required_error: "Amount is required" }),
  description: z.string({ required_error: "Description is required" }),
});
