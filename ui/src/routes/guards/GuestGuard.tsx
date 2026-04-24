import { useAppSelector } from "@/hooks";
import { Navigate, Outlet } from "react-router";

function GuestGuard() {
  const { isAuthenticated } = useAppSelector((state) => state.authReducer);

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default GuestGuard;
