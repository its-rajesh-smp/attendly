import { ErrorMessages, ErrorMessagesToKeyMap, HttpStatus } from "@/constants";
import { Response } from "express";
import { ZodError } from "zod";
import { ZodUtil } from ".";

/**
 * Sends a JSON response with the provided data and HTTP status code.
 * @param {Response} res - The ExpressJS response object.
 * @param {number} statusCode - The HTTP status code to be sent in the response.
 * @param {any} data - The JSON data to be sent in the response.
 * @returns {Response} - The ExpressJS response object with the JSON data and HTTP status code.
 */
export const sendResponse: any = (
  res: Response,
  statusCode: number,
  data: any
) => {
  return res.status(statusCode).send({ data });
};

/**
 * Sends an error response with the appropriate HTTP status code and error message.
 * If the error is a Zod validation error, it formats the error accordingly.
 * @param {Response} res - The ExpressJS response object used to send the error response.
 * @param {string} errorMessage - The error message to be sent in the response.
 * @param {any} [error] - Optional additional error information, which can be of any type.
 * If the error is a ZodError, it will be formatted using `ZodUtil.formatZodError`.
 * @returns {Response} - The ExpressJS response object with the error message and status code.
 */
export const sendErrorResponse: any = (
  res: Response,
  errorMessage: string,
  error?: any
) => {
  // Handle Zod validation errors
  if (error instanceof ZodError) {
    return res.status(HttpStatus.VALIDATION_ERROR).send({
      message: ErrorMessages.VALIDATION_ERROR,
      error: ZodUtil.formatZodError(error),
    });
  }

  const key = ErrorMessagesToKeyMap[errorMessage] as keyof typeof HttpStatus;

  // Default status code is not found
  const statusCode = key ? HttpStatus[key] : HttpStatus.INTERNAL_SERVER_ERROR;

  return res.status(statusCode).send({
    message: errorMessage || ErrorMessages.INTERNAL_SERVER_ERROR,
    error,
  });
};
