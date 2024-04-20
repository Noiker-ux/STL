import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Isub {
  submenu: any;
  user: any;
}

const initialState: Isub = {
  submenu: {},
  user: {},
};

export const followingSlice = createSlice({
  name: "following",
  initialState,
  reducers: {
    followingList: (state, action: PayloadAction<Isub>) => {
      state.submenu = action.payload.submenu;
      state.user = action.payload.user;
    },
  },
});

export default followingSlice.reducer;
export const followingActions = followingSlice.actions;
