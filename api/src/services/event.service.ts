import { PrismaTypes, prisma } from "@/config/prisma.conf";

/**
 * Find one event that matches the condition.
 * @param {PrismaTypes.EventWhereInput} condition - The condition to filter the event.
 * @returns {Promise<Prisma.Event | null>} - The event that matches the condition or null if no event is found.
 */
const fineOne = async (condition: PrismaTypes.EventWhereInput) => {
  return await prisma.event.findFirst({ where: condition });
};

/**
 * Find all events that match the provided options.
 * @param {PrismaTypes.EventFindManyArgs} options - Options to filter, select, and paginate events.
 * @returns {Promise<Prisma.Event[]>} - A promise that resolves to an array of events.
 */
const findAll = async (options: PrismaTypes.EventFindManyArgs = {}) => {
  return await prisma.event.findMany({ ...options });
};

/**
 * Find events that match the condition paginated.
 * @param {{ condition?: PrismaTypes.EventWhereInput, options?: PrismaTypes.EventFindManyArgs, page?: number, limit?: number }} options - Options to filter, select, and paginate events.
 * @returns {Promise<{ events: Prisma.Event[], pagination: { page: number, limit: number, totalCount: number, totalPages: number } }>} - A promise that resolves to an object containing an array of events and pagination data.
 */
const findPaginated = async ({
  condition = {},
  options = {},
  page = 1,
  limit = 10,
}) => {
  const skip = (page - 1) * limit;

  const [events, totalCount] = await Promise.all([
    prisma.event.findMany({
      where: condition,
      take: limit,
      skip,
      ...options,
    }),
    prisma.event.count({ where: condition }),
  ]);

  return {
    events,
    pagination: {
      page,
      limit,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
    },
  };
};

/**
 * Create one event.
 * @param {PrismaTypes.EventUncheckedCreateInput} data - The data to create the event.
 * @returns {Promise<Prisma.Event>} - The created event.
 */
const createOne = async (data: PrismaTypes.EventUncheckedCreateInput) => {
  return await prisma.event.create({ data });
};

export default { findAll, fineOne, createOne, findPaginated };
