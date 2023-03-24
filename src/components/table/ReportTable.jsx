import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { searchSubject } from "./tableComponents/searchSubjectSlice";
import { tableData } from "../../tableDataSlice";
import { Paper } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import CustomTableBody from "./tableComponents/CustomTableBody";
import EnhancedTableHead from "./tableComponents/EnhancedTableHead";
import CustomTableNavigation from "./tableComponents/CustomTableNavigation";

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
  const tableRows = useSelector(tableData);
  const subject = useSelector(searchSubject);

  const [rows, setRows] = useState(tableRows);
  const [searched, setSearched] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("hours");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // Filtration logic for table search functionality
  const handleSearchChange = (e) => {
    setSearched(e.target.value);
  };

  useEffect(() => {
    const filteredRows = tableRows.filter((row) => {
      if (subject.value === "date") {
        return row[subject.value][subject.value]
          .toLocaleDateString()
          .toLowerCase()
          .includes(searched.toLowerCase());
      }
      return row[subject.value][subject.value]
        .toLowerCase()
        .includes(searched.toLowerCase());
    });
    setRows(filteredRows);
  }, [searched]);

  useEffect(() => {
    setRows(tableRows);
  }, [subject]);

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
            onSearchChange={handleSearchChange}
          />
          <CustomTableBody
            rows={rows}
            order={order}
            page={page}
            orderBy={orderBy}
            rowsPerPage={rowsPerPage}
            stableSort={stableSort}
            getComparator={getComparator}
          />
          <CustomTableNavigation
            count={rows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            emptyRows={emptyRows}
          />
        </Table>
      </TableContainer>
    </Paper>
  );
});
