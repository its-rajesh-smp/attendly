import { HttpStatus } from "@/constants";
import { EventDTO } from "@/dtos";
import { EventService } from "@/services";
import { sendResponse } from "@/utils";
import { Request, Response } from "express";

/**
 * Retrieves all events, including whether the current user has RSVP'd to each event.
 * @param {Request} req - The ExpressJS request object.
 * @param {Response} res - The ExpressJS response object.
 * @returns {Promise<void>} - A promise that resolves to sending the events in the response.
 */
const getAllEvents = async (req: Request, res: Response) => {
  const currentUser = req?.user;

  // Pagination
  const page = parseInt(req.query?.page as string) || 1;
  const limit = parseInt(req.query?.limit as string) || 10;
  const isRsvpToEvent = req.query?.isRsvpToEvent;

  const where: any = {};

  // if the user is not logged in then only checking for isRsvpToEvent
  if (!currentUser && isRsvpToEvent) {
    return sendResponse(res, HttpStatus.OK, {
      pagination: {
        page,
        limit,
        totalCount: 0,
        totalPages: 0,
      },
      events: [],
    });
  }

  // if the user is logged in then only checking for isRsvpToEvent
  if (currentUser && isRsvpToEvent) {
    where.EventRsvps = {
      some: {
        userId: currentUser?.id,
      },
    };
  }

  // If the user is logged in, include their RSVPs
  const includeOptions = currentUser?.id
    ? {
        EventRsvps: {
          where: {
            userId: currentUser.id,
          },
        },
      }
    : {};

  // Getting the paginated data
  const response = await EventService.findPaginated({
    condition: where,
    limit,
    page,
    options: {
      include: includeOptions,
    },
  });

  // Add isRsvpToEvent property to each event
  const eventsWithRsvpStatus = response.events.map((event: any) => {
    const isRsvpToEvent = event?.EventRsvps?.length > 0;
    delete event?.EventRsvps;
    return {
      ...event,
      isRsvpToEvent,
    };
  });

  return sendResponse(res, HttpStatus.OK, {
    ...response,
    events: eventsWithRsvpStatus,
  });
};

/**
 * Creates a new event with the provided data and assigns the current user as the creator.
 * @param {Request} req - The ExpressJS request object containing the event data in the body.
 * @param {Response} res - The ExpressJS response object used to send the created event.
 * @returns {Promise<void>} - A promise that resolves to sending the created event in the response.
 */
const createAnEvent = async (req: Request, res: Response) => {
  const { id } = req.user;
  const data = EventDTO.createEventSchema.parse(req.body);

  const event = await EventService.createOne({
    ...data,
    creatorId: id,
  });

  return sendResponse(res, HttpStatus.CREATED, event);
};

export default { getAllEvents, createAnEvent };
