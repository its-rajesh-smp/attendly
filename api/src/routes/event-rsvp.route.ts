import { EventRsvpController } from "@/controllers";
import { AuthMiddleware } from "@/middlewares";
import express from "express";

const router = express.Router();

router.post("/:eventId", AuthMiddleware, EventRsvpController.rsvpToEvent);
router.delete("/:eventId", AuthMiddleware, EventRsvpController.unRsvpFromEvent);

export default router;
