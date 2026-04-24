import { prisma, PrismaTypes } from "@/config/prisma.conf";

/**
 * Find one user that matches the condition.
 * @param {PrismaTypes.UserWhereUniqueInput} condition - The condition to filter the user.
 * @returns {Promise<Prisma.User | null>} - The user that matches the condition or null if no user is found.
 */
const findOne = async (condition: PrismaTypes.UserWhereUniqueInput) => {
  return await prisma.user.findFirst({ where: condition });
};

/**
 * Create one user.
 * @param {PrismaTypes.UserCreateInput} user - The data to create the user.
 * @returns {Promise<Prisma.User>} - The created user.
 */
const createOne = async (user: PrismaTypes.UserCreateInput) => {
  return await prisma.user.create({ data: user });
};

export default { createOne, findOne };
