import EventsPage from "@/pages/EventsPage";
import HomePage from "@/pages/HomePage";

const publicRoutes = [
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <EventsPage />,
    path: "/events",
  },
];

export default publicRoutes;
