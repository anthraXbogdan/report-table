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

export const { searchSubjectUpdated } = searchSubjectSlice.actions;

export const searchSubject = (state) => state.searchSubject;

export default searchSubjectSlice.reducer;
