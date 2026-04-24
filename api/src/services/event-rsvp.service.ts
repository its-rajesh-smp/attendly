import { prisma, PrismaTypes } from "@/config/prisma.conf";

/**
 * Find one eventRsvp that matches the condition.
 * @param {PrismaTypes.EventRsvpWhereInput} condition - The condition to filter the eventRsvp.
 * @returns {Promise<Prisma.EventRsvp | null>} - The eventRsvp that matches the condition or null if no eventRsvp is found.
 */
const findOne = async (condition: PrismaTypes.EventRsvpWhereInput) => {
  return await prisma.eventRsvp.findFirst({ where: condition });
};

/**
 * Create one eventRsvp.
 * @param {PrismaTypes.EventRsvpUncheckedCreateInput} data - The data to create the eventRsvp.
 * @returns {Promise<Prisma.EventRsvp>} - The created eventRsvp.
 */
const createOne = async (data: PrismaTypes.EventRsvpUncheckedCreateInput) => {
  return await prisma.eventRsvp.create({ data });
};

/**
 * Delete one eventRsvp that matches the condition.
 * @param {PrismaTypes.EventRsvpWhereUniqueInput} condition - The condition to filter the eventRsvp.
 * @returns {Promise<Prisma.EventRsvp | null>} - The deleted eventRsvp or null if no eventRsvp is found.
 */
const deleteOne = async (condition: PrismaTypes.EventRsvpWhereUniqueInput) =>
  await prisma.eventRsvp.delete({ where: condition });

/**
 * Find one eventRsvp that matches the condition and delete it.
 * @param {PrismaTypes.EventRsvpWhereInput} condition - The condition to filter the eventRsvp.
 * @returns {Promise<boolean>} - True if the eventRsvp is found and deleted, false otherwise.
 */
const findOneAndDelete = async (condition: PrismaTypes.EventRsvpWhereInput) => {
  const eventParticipation = await findOne(condition);

  if (!eventParticipation) {
    return false;
  }

  if (eventParticipation) {
    await deleteOne({
      id: eventParticipation.id,
    });
    return true;
  }
};

export default {
  findOne,
  createOne,
  deleteOne,
  findOneAndDelete,
};
