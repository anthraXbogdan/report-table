import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../../mockData";
import { getTotal } from "../../../helpers";

const initialState = data;

const tableDataSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {},
});

// export const {} = reportTableSlice.actions;

export const tableData = (state) => state.tableData;

export const dateRange = (state) => {
  const dates = [];
  state.tableData.map((item) => {
    dates.push(item.date.date);
  });
  dates.sort((a, b) => a - b);
  return [
    dates[0].toLocaleDateString(),
    dates[dates.length - 1].toLocaleDateString(),
  ];
};

export const totalProjects = (state) => {
  return getTotal(state.tableData, "project");
};

export const totalTasks = (state) => {
  return getTotal(state.tableData, "task");
};

export const totalDays = (state) => {
  return getTotal(state.tableData, "date");
};

export const totalMembers = (state) => {
  return getTotal(state.tableData, "person");
};

export const totalHours = (state) => {
  const hours = [];
  state.tableData.map((item) => {
    hours.push(item.hours.hours);
  });

  return hours.reduce((total, current) => {
    return total + current;
  }, 0);
};

export default tableDataSlice.reducer;
