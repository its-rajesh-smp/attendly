import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router";
import errorRoutes from "./error.routes";
import guestRoutes from "./guest.routes";
import publicRoutes from "./public.routes";

const AppLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
    children: [...publicRoutes, ...guestRoutes, ...errorRoutes],
  },
]);

export default appRouter;
