import jwt from "jsonwebtoken";
import { EnvUtil } from ".";

/**
 * Creates a JSON Web Token (JWT) from given payload.
 *
 * @param {any} payload The payload to sign into the JWT.
 * @returns {string} The signed JWT.
 */
const createJWTToken = (payload: any) => {
  const JWT_SECRET = EnvUtil.getEnv("JWT_SECRET") || "secret";
  return jwt.sign(payload, JWT_SECRET);
};

/**
 * Verifies a JSON Web Token (JWT) using a secret.
 *
 * @param {string} token - The JWT to verify.
 * @returns {object | string} The decoded payload if the token is valid, or throws an error if invalid.
 */
const verifyJWTToken = (token: string) => {
  const JWT_SECRET = EnvUtil.getEnv("JWT_SECRET") || "secret";
  return jwt.verify(token, JWT_SECRET);
};

export default { createJWTToken, verifyJWTToken };
