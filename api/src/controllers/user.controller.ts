import { ErrorMessages, HttpStatus } from "@/constants";
import { UserDTO } from "@/dtos";
import { UserService } from "@/services";
import { BcryptUtil, JWTUtil, sendErrorResponse, sendResponse } from "@/utils";
import { Request, Response } from "express";

/**
 * Retrieves user information for the currently authenticated user.
 * @param {Request} req - The ExpressJS request object, containing the authenticated user's ID.
 * @param {Response} res - The ExpressJS response object used to send the user information.
 * @returns {Promise<void>} - A promise that resolves to sending the user information in the response.
 * If the user is not found, it sends a 404 error response.
 */

const getUser = async (req: Request, res: Response) => {
  const { id } = req.user;

  const existingUser = await UserService.findOne({ id });
  if (!existingUser) {
    return sendErrorResponse(res, ErrorMessages.USER_NOT_FOUND);
  }

  const payload = {
    ...existingUser,
    password: undefined,
  };

  return sendResponse(res, HttpStatus.OK, payload);
};

/**
 * Registers a new user with the provided email, password, and name.
 * Hashes the user's password, creates a new user record, and returns
 * the created user information along with a JSON Web Token for authentication.
 * If a user with the provided email already exists, it sends a 409 error response.
 * @param {Request} req - The ExpressJS request object containing the user's registration data.
 * @param {Response} res - The ExpressJS response object used to send the user information or error.
 * @returns {Promise<void>} - A promise that resolves to sending the created user information and JWT in the response.
 */

const registerUser = async (req: Request, res: Response) => {
  const { email, password, name } = UserDTO.userRegistrationSchema.parse(
    req.body
  );

  const existingUser = await UserService.findOne({ email });
  if (existingUser) {
    return sendErrorResponse(res, ErrorMessages.USER_ALREADY_EXISTS);
  }

  const hashedPassword = await BcryptUtil.createHash(password);

  const user = await UserService.createOne({
    email,
    password: hashedPassword,
    name,
  });

  const authToken = JWTUtil.createJWTToken({ id: user.id, email: user.email });

  const payload = {
    ...user,
    authToken,
    password: undefined,
  };

  return sendResponse(res, HttpStatus.CREATED, payload);
};

/**
 * Authenticates a user with the provided email and password.
 * If the credentials are valid, it returns the user information
 * along with a JSON Web Token for authentication. If the user
 * is not found or the password is invalid, it sends an error response.
 * @param {Request} req - The ExpressJS request object containing the user's login credentials.
 * @param {Response} res - The ExpressJS response object used to send the user information or error.
 * @returns {Promise<void>} - A promise that resolves to sending the user information and JWT in the response.
 */
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = UserDTO.userLoginSchema.parse(req.body);

  const user = await UserService.findOne({ email });
  if (!user) {
    return sendErrorResponse(res, ErrorMessages.USER_NOT_FOUND);
  }

  const isValidPassword = await BcryptUtil.compareHash(password, user.password);

  if (!isValidPassword) {
    return sendErrorResponse(res, ErrorMessages.INVALID_PASSWORD);
  }

  const authToken = JWTUtil.createJWTToken({ id: user.id, email: user.email });

  const payload = {
    ...user,
    authToken,
    password: undefined,
  };

  return sendResponse(res, HttpStatus.OK, payload);
};

export default { getUser, registerUser, loginUser };
