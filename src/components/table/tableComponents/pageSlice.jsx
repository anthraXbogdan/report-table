import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.value += 1;
    },
    decrementPage: (state) => {
      state.value -= 1;
    },
    setToFirstPage: (state) => {
      state.value = 0;
    },
    setToLastPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const page = (state) => state.page;

export const { incrementPage, decrementPage, setToFirstPage, setToLastPage } =
  pageSlice.actions;

export default pageSlice.reducer;
