import type { RootState } from "@/store/redux-store";
import { type TypedUseSelectorHook, useSelector } from "react-redux";

export type AppSelector = TypedUseSelectorHook<RootState>;
export const useAppSelector: AppSelector = useSelector;
