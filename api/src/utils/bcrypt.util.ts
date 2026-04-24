import bcrypt from "bcrypt";
import { EnvUtil } from ".";

/**
 * Creates a Bcrypt hash of a password.
 *
 * The number of salt rounds used is determined by the BCRYPT_SALT_ROUNDS
 * environment variable. If this variable is not set, a default of 10 rounds
 * is used.
 *
 * @param {string} password - The password to hash.
 *
 * @returns {Promise<string>} - The hash of the password.
 */
const createHash = (password: string) => {
  const SALT_ROUNDS = EnvUtil.getEnv("BCRYPT_SALT_ROUNDS") || 10;
  return bcrypt.hash(password, Number(SALT_ROUNDS));
};

/**
 * Compares a plaintext password with a Bcrypt hash to check if they match.
 *
 * This function uses the Bcrypt library to compare the provided password with
 * the stored hash. It returns a promise that resolves to `true` if the password
 * matches the hash, or `false` otherwise.
 *
 * @param {string} password - The plaintext password to compare.
 * @param {string} hash - The Bcrypt hash to compare against.
 *
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating
 * whether the password matches the hash.
 */

const compareHash = (password: string, hash: string) =>
  bcrypt.compare(password, hash);

export default { createHash, compareHash };
