import { configureStore } from "@reduxjs/toolkit";
import tableDataReducer from "./components/table/tableComponents/tableDataSlice";
import searchReducer from "./components/table/tableComponents/tableSearchSlice";
import pageReducer from "./components/table/tableComponents/pageSlice";

export default configureStore({
  reducer: {
    tableData: tableDataReducer,
    search: searchReducer,
    page: pageReducer,
  },
});
