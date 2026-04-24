import { fetchUserAct } from "@/actions";
import { useAppDispatch } from "@/hooks";
import LoadingPage from "@/pages/LoadingPage";
import appRouter from "@/routes/app.router";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  // Fetching the user
  useEffect(() => {
    (async () => {
      await dispatch(fetchUserAct());
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return <RouterProvider router={appRouter} />;
}

export default App;
