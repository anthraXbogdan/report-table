import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTotal } from "../../../helpers";

const initialState = {
  tableData: [],
  status: "idle",
  error: null,
};

export const fetchTableData = createAsyncThunk(
  "tableData/fetchTableData",
  async () => {
    const response = await fetch("http://localhost:3004/projects");
    const projects = await response.json();
    return projects;
  }
);

const tableDataSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTableData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTableData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add fetched tableData to the array
        state.tableData = state.tableData.concat(action.payload);
      })
      .addCase(fetchTableData.rejected, (state, action) => {
        state.action = "failed";
        state.error = action.error.message;
      });
  },
});

// export const {} = tableDataSlice.actions;

export const tableData = (state) => state.tableData.tableData;

export const totalProjects = (state) => {
  return getTotal(state.tableData.tableData, "project");
};

export const totalTasks = (state) => {
  return getTotal(state.tableData.tableData, "task");
};

export const totalDays = (state) => {
  return getTotal(state.tableData.tableData, "date");
};

export const totalMembers = (state) => {
  return getTotal(state.tableData.tableData, "person");
};

export const totalHours = (state) => {
  const hours = [];
  state.tableData.tableData.map((item) => {
    hours.push(item.hours.hours);
  });

  return hours.reduce((total, current) => {
    return total + current;
  }, 0);
};

export default tableDataSlice.reducer;
