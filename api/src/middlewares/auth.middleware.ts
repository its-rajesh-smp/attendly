import { ErrorMessages } from "@/constants";
import { UserService } from "@/services";
import { DecodedUserJWT } from "@/types/others.type";
import { JWTUtil, sendErrorResponse } from "@/utils";
import { NextFunction, Request, Response } from "express";

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return sendErrorResponse(res, ErrorMessages.UNAUTHORIZED);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = JWTUtil.verifyJWTToken(token);
    const { email, id } = decoded as DecodedUserJWT;

    const user = await UserService.findOne({ id });

    if (!user) {
      return sendErrorResponse(res, ErrorMessages.USER_NOT_FOUND);
    }

    req.user = {
      email,
      id,
      name: user.name,
    };

    next();
  } catch (error) {
    return sendErrorResponse(res, ErrorMessages.UNAUTHORIZED);
  }
};
