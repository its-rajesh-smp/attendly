import { ErrorMessages } from "@/constants";
import { LoggerUtl, sendErrorResponse } from "@/utils";
import { NextFunction, Request, Response } from "express";

const ErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  LoggerUtl.logToConsole(err);
  sendErrorResponse(res, ErrorMessages.INTERNAL_SERVER_ERROR, err);
};

export default ErrorHandler;
