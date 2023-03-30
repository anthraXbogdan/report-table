import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTableData } from "./tableComponents/tableDataSlice";
import { setToFirstPage } from "./tableComponents/pageSlice";
import {
  searchTarget,
  searchKeyword,
} from "./tableComponents/tableSearchSlice";
import { page } from "./tableComponents/pageSlice";
import { tableData } from "./tableComponents/tableDataSlice";
import { Paper } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import CustomTableBody from "./tableComponents/CustomTableBody";
import EnhancedTableHead from "./tableComponents/EnhancedTableHead";
import CustomTableNavigation from "./tableComponents/CustomTableNavigation";
import { getDate } from "../../helpers";

// Sorting logic (ascending and descending)
function descendingComparator(a, b, orderBy) {
  if (b[orderBy][orderBy] < a[orderBy][orderBy]) {
    return -1;
  }
  if (b[orderBy][orderBy] > a[orderBy][orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => {
    return [el, index];
  });

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }

    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => {
    return el[0];
  });
}

export const ReportTable = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const tableRows = useSelector(tableData);
  const subject = useSelector(searchTarget);
  const keyword = useSelector(searchKeyword);
  const pageTracker = useSelector(page);

  const tableDataStatus = useSelector((state) => state.tableData.status);
  const error = useSelector((state) => state.tableData.error);

  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("hours");

  useEffect(() => {
    if (tableDataStatus === "idle") {
      dispatch(fetchTableData());
    }
    setRows(tableRows);
  }, [tableDataStatus, dispatch]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    dispatch(setToFirstPage());
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    pageTracker.value > 0
      ? Math.max(0, (1 + pageTracker.value) * rowsPerPage - rows.length)
      : 0;

  // Filtration logic for table search functionality
  useEffect(() => {
    if (subject === "date") {
      const filteredRows = tableRows.filter((row) => {
        return getDate(row[subject][subject]).includes(keyword);
      });
      setRows(filteredRows);
    } else {
      const filteredRows = tableRows.filter((row) => {
        return row[subject][subject]
          .toLowerCase()
          .includes(keyword.toLowerCase());
      });
      setRows(filteredRows);
    }
  }, [keyword]);

  return (
    <Paper
      elevation={4}
      sx={{ width: "100%", overflow: "hidden", margin: "0 auto" }}
      square
    >
      <TableContainer
        sx={{
          height: 520,
          backgroundColor: "var(--table-primary-background-color)",
        }}
      >
        <Table
          ref={ref}
          stickyHeader
          aria-label="sticky table"
          sx={{ minWidth: 700 }}
          style={{
            backgroundColor: "var(--table-primary-background-color)",
          }}
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <CustomTableBody
            rows={rows}
            order={order}
            orderBy={orderBy}
            rowsPerPage={rowsPerPage}
            stableSort={stableSort}
            getComparator={getComparator}
          />
          <CustomTableNavigation
            count={rows.length}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            emptyRows={emptyRows}
          />
        </Table>
      </TableContainer>
    </Paper>
  );
});
