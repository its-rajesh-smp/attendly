import { EventController } from "@/controllers";
import { AuthMiddleware, OptionalAuthMiddleware } from "@/middlewares";
import express from "express";

const router = express.Router();

router.post("/", AuthMiddleware, EventController.createAnEvent);
router.get("/all", OptionalAuthMiddleware, EventController.getAllEvents);

export default router;
