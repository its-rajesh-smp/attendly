import { authReducer } from "@/reducers";
import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: {
    authReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
