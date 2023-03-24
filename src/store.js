import { configureStore } from "@reduxjs/toolkit";
import tableDataReducer from "./tableDataSlice";
import searchSubjectReducer from "./components/table/tableComponents/searchSubjectSlice";

export default configureStore({
  reducer: {
    tableData: tableDataReducer,
    searchSubject: searchSubjectReducer,
  },
});
