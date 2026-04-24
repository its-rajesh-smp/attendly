import { LoggerUtl } from ".";

/**
 * Retrieves an environment variable by its key.
 *
 * If the variable does not exist, throws an Error with a message
 * indicating the missing variable.
 *
 * @param {string} key - Key of the environment variable to retrieve.
 * @returns {string} Value of the environment variable.
 * @throws {Error} When the environment variable does not exist.
 */
const getEnv = (key: string) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return process.env[key];
};

export default { getEnv };
