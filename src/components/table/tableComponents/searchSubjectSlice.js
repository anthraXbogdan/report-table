import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "date" };

const searchSubjectSlice = createSlice({
  name: "searchSubject",
  initialState,
  reducers: {
    searchSubjectUpdated: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const searchSubject = (state) => state.searchSubject;

export const { searchSubjectUpdated } = searchSubjectSlice.actions;

export default searchSubjectSlice.reducer;
