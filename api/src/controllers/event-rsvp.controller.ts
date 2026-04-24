import { ErrorMessages, HttpStatus } from "@/constants";
import { EventRsvpDTO } from "@/dtos";
import { EventRsvpService } from "@/services";
import { sendErrorResponse, sendResponse } from "@/utils";
import { Request, Response } from "express";

/**
 * Creates a new EventRsvp record, given the current user's ID and event ID in the request params.
 * If the user has already RSVP'd to the event, it returns a 400 error response.
 * @param {Request} req - The ExpressJS request object.
 * @param {Response} res - The ExpressJS response object.
 * @returns {Promise<void>} - A promise that resolves to sending a response.
 */
const rsvpToEvent = async (req: Request, res: Response) => {
  const { id } = req.user;
  const { eventId } = EventRsvpDTO.eventRsvpSchema.parse(req.params);

  const isRsvpToEvent = await EventRsvpService.findOne({ userId: id, eventId });
  if (isRsvpToEvent) {
    return sendErrorResponse(res, ErrorMessages.ALREADY_RSVPED);
  }

  await EventRsvpService.createOne({
    userId: id,
    eventId,
  });

  return sendResponse(res, HttpStatus.OK, true);
};

/**
 * Deletes an EventRsvp record given the current user's ID and event ID in the request params.
 * If the user has not RSVP'd to the event, it returns a 400 error response.
 * @param {Request} req - The ExpressJS request object.
 * @param {Response} res - The ExpressJS response object.
 * @returns {Promise<void>} - A promise that resolves to sending a response.
 */
const unRsvpFromEvent = async (req: Request, res: Response) => {
  const { id } = req.user;
  const { eventId } = EventRsvpDTO.eventRsvpSchema.parse(req.params);

  const isDeleted = await EventRsvpService.findOneAndDelete({
    userId: id,
    eventId,
  });

  if (!isDeleted) {
    return sendErrorResponse(res, ErrorMessages.HAVENT_RSVPED);
  }

  return sendResponse(res, HttpStatus.OK, true);
};

export default { rsvpToEvent, unRsvpFromEvent };
