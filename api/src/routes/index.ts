import { IRoute } from "@/types/route.type";
import express from "express";
import eventRsvpRoutes from "./event-rsvp.route";
import eventRoutes from "./event.route";
import userRoutes from "./user.route";

const router = express.Router();

const defaultRoutes: IRoute[] = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/event",
    route: eventRoutes,
  },
  {
    path: "/event-rsvp",
    route: eventRsvpRoutes,
  },
];

// add default routes
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
