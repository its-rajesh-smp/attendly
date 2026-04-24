import { z } from "zod";

const eventRsvpSchema = z.object({
  eventId: z.string().trim().min(1, { message: "Event ID is required" }),
});

export default { eventRsvpSchema };
