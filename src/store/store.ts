import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./pagination.slice";
import followingSlice from "./following.slice";

export const store = configureStore({
  reducer: {
    pagination: paginationSlice,
    following: followingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
