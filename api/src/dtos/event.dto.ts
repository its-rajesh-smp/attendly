import { z } from "zod";

const createEventSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, { message: "Title must be at least 3 characters long" }),
  description: z
    .string()
    .trim()
    .min(10, { message: "Description must be at least 10 characters long" }),
  date: z.string().trim().min(1, { message: "Date is required" }),
  thumbnail: z
    .string()
    .trim()
    .url({ message: "Thumbnail must be a valid URL" }),
});

export default { createEventSchema };
