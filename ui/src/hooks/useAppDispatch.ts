import type reduxStore from "@/store/redux-store";
import { useDispatch } from "react-redux";

export type AppDispatch = typeof reduxStore.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
