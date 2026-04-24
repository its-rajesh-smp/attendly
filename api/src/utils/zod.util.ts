import { ZodError } from "zod";

/**
 * Converts a ZodError into a simplified error format.
 *
 * @param {ZodError} error - The ZodError object containing validation errors.
 * @returns {Array<{ field: string, message: string }>} An array of objects,
 * each containing a 'field' which is a string representation of the error path,
 * and a 'message' which describes the error.
 */
const formatZodError = (error: ZodError) => {
  return error.errors.map((err) => ({
    field: err.path.join("."),
    message: err.message,
  }));
};

export default { formatZodError };
