import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IPagination {
  next: boolean;
  page: number;
  prev: boolean;
}

const initialState: IPagination = {
  next: false,
  page: 1,
  prev: false,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<IPagination>) => {
      state.next = action.payload.next;
      state.page = action.payload.page;
      state.prev = action.payload.prev;
    },
  },
});

export default paginationSlice.reducer;
export const paginationActions = paginationSlice.actions;
