import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IPagination from "./pagination.inerface";
import axios from "axios";
import { instance } from "../../axios/instance";

const initialState: IPagination = {
  last: false,
  next: false,
  page: 1,
  countPages: 1,
  nickname: "",
  prev: false,
  following: [],
  first: false,
};

export const handlePagination = createAsyncThunk(
  "paginationTableFollowers",
  async ({
    nickname,
    page,
  }: {
    nickname: string;
    navigate: "next" | "prev" | "last" | "first";
    page: number;
  }) => {
    const responce = await instance.get(
      `users/${nickname}/following?per_page=10&page=${page}`
    );

    const linkHeader = responce.headers.link;
    const pagesRemainingLast = linkHeader.includes(`rel=\"last\"`);
    const pagesRemainingNext = linkHeader.includes(`rel=\"next\"`);
    const pagesRemainingPrev = linkHeader.includes(`rel=\"prev\"`);
    const pagesRemainingFirst = linkHeader.includes(`rel=\"first\"`);

    let pageCount = 1;

    if (pagesRemainingLast) {
      const arrayFromLinks = linkHeader.split(" ");

      const itemLast = arrayFromLinks.findIndex((itemLink) => {
        return itemLink.includes(`rel=\"last\"`);
      });
      const urlLast = new URL(arrayFromLinks[itemLast - 1].slice(1, -2));
      pageCount = Number(urlLast.searchParams.get("page")) ?? 1;
    } else {
      pageCount = page;
    }

    return {
      page: page,
      following: responce.data,
      nickname: nickname,
      first: pagesRemainingFirst,
      last: pagesRemainingLast,
      prev: pagesRemainingPrev,
      next: pagesRemainingNext,
      countPage: pageCount,
    };
  }
);

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(handlePagination.fulfilled, (state, action) => {
      state.next = action.payload.next;
      state.prev = action.payload.prev;
      state.last = action.payload.last;
      state.first = action.payload.first;
      state.page = action.payload.page;
      state.countPages = action.payload.countPage;
      state.following = action.payload.following;
      state.nickname = action.payload.nickname;
    });
  },
});

export default paginationSlice.reducer;
export const paginationActions = paginationSlice.actions;
