import { createTheme, ThemeProvider } from "@mui/material/styles";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TablePaginationActions from "./TablePaginationActions";
import { PaginationTableCell, CustomTableFooter } from "./customTableCells";

const theme = createTheme({
  components: {
    // Name of the component
    MuiTablePagination: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: 12,
          color: "var(--table-primary-color)",
        },
        selectLabel: {
          fontSize: 12,
          color: "var(--table-primary-color)",
        },
        displayedRows: {
          fontSize: 12,
          color: "var(-table-primary-color)",
        },
        selectIcon: {
          fontSize: 24,
          color: "var(--table-secondary-color)",
        },
        menuItem: {
          fontSize: 12,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "large",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "var(--table-primary-color)",
          "&.Mui-disabled": {
            color: "var(--table-secondary-color)",
          },
          "&:hover": {
            backgroundColor: "var(--table-hover-background-color)",
          },
        },
      },
    },
  },
});

export default function CustomTableNavigation(props) {
  const { count, page, onPageChange, rowsPerPage, onRowsPerPageChange } = props;

  return (
    <CustomTableFooter>
      <TableRow>
        <PaginationTableCell></PaginationTableCell>
        <PaginationTableCell></PaginationTableCell>
        <ThemeProvider theme={theme}>
          <TablePagination
            sx={{
              position: "sticky",
              right: 0,
              borderBlockStart: "1px solid var(--table-border-color)",
            }}
            container="div"
            colSpan={3}
            rowsPerPageOptions={[5, 10, 15, 25, { label: "All", value: -1 }]}
            count={count}
            page={page}
            onPageChange={onPageChange}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={onRowsPerPageChange}
            ActionsComponent={TablePaginationActions}
          ></TablePagination>
        </ThemeProvider>
      </TableRow>
    </CustomTableFooter>
  );
}
