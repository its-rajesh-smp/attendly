import { Toaster } from "@/components/ui/Toaster.tsx";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App.tsx";
import "./index.css";
import reduxStore from "./store/redux-store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={reduxStore}>
    <App />
    <Toaster />
  </Provider>
);
