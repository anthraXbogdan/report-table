import { configureStore } from "@reduxjs/toolkit";
import tableDataReducer from "./components/table/tableComponents/tableDataSlice";
import searchSubjectReducer from "./components/table/tableComponents/searchSubjectSlice";
import pageReducer from "./components/table/tableComponents/pageSlice";

export default configureStore({
  reducer: {
    tableData: tableDataReducer,
    searchSubject: searchSubjectReducer,
    page: pageReducer,
  },
});
