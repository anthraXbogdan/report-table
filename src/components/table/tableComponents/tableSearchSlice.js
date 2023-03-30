import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchSubject: "", searchKeyword: "" };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchSubjectUpdated: (state, action) => {
      state.searchSubject = action.payload;
    },
    resetSearchKeyword: (state, action) => {
      state.searchKeyword = "";
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const searchTarget = (state) => state.search.searchSubject;
export const searchKeyword = (state) => state.search.searchKeyword;

export const { searchSubjectUpdated, resetSearchKeyword, setSearchKeyword } =
  searchSlice.actions;

export default searchSlice.reducer;
