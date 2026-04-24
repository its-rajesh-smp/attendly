import { z } from "zod";
import { Logger } from ".";

const validateInput = <T>(schema: z.ZodSchema<T>, data: unknown): T | null => {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      Object.values(error.flatten().fieldErrors).forEach((fieldError) => {
        fieldError?.forEach((message) => Logger.logError(message));
      });
    } else {
      Logger.logError(error);
    }
    throw error;
  }
};

export default { validateInput };
