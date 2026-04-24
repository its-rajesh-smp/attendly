import { PrismaClient, Prisma } from "../../prisma/generated/prisma-client-js";

const prisma = new PrismaClient();

export { prisma, Prisma as PrismaTypes };
