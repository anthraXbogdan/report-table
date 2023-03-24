import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  PrimaryTableCell,
  StickyTableCell,
  PrimaryTableRow,
} from "./customTableCells";
import Search from "./Search";

const theme = createTheme({
  components: {
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "var(--table-primary-color)",
          },
        },
      },
    },
  },
});

export default function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, onSearchChange } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const columns = [
    {
      id: "date",
      label: "Date",
      minWidth: 120,
      position: "static",
      align: "left",
    },
    {
      id: "project",
      label: "Project",
      minWidth: 230,
      position: "static",
      align: "left",
    },
    {
      id: "task",
      label: "Task",
      minWidth: 200,
      position: "static",
      align: "left",
    },
    {
      id: "person",
      label: "Person",
      minWidth: 200,
      position: "static",
      align: "left",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <TableHead>
        <PrimaryTableRow>
          {columns.map((column, index) => (
            <PrimaryTableCell
              key={index}
              sortDirection={orderBy === column.id ? order : false}
              style={{
                minWidth: column.minWidth,
              }}
              sx={{
                fontSize: "1rem",
                paddingBlockStart: "1.6rem",
                paddingBlockEnd: "1.6rem",
                color: "var(--table-secondary-color)",
              }}
              align={column.align}
            >
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : "asc"}
                onClick={createSortHandler(column.id)}
                sx={{
                  "& .MuiTableSortLabel-icon": {
                    color: "var(--table-secondary-color) !important",
                  },
                  "&.Mui-active": {
                    color: "var(--table-primary-color)",
                  },
                }}
              >
                {orderBy === column.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
                {column.label}
              </TableSortLabel>
              <Box sx={{ marginBlockStart: "10px" }}>
                <Search
                  searchSubject={column.label}
                  onSearchChange={onSearchChange}
                />
              </Box>
            </PrimaryTableCell>
          ))}
          <StickyTableCell
            align="right"
            sx={{
              fontSize: "1rem",
              fontWeight: "500",
              color: "var(--table-secondary-color)",
            }}
          >
            <TableSortLabel
              active={orderBy === "hours"}
              direction={orderBy === "hours" ? order : "asc"}
              onClick={createSortHandler("hours")}
              sx={{
                "& .MuiTableSortLabel-icon": {
                  color: "var(--table-secondary-color) !important",
                },
                "&.Mui-active": {
                  color: "var(--table-primary-color)",
                },
              }}
            >
              {orderBy === "hours" ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
              Hours tracked
            </TableSortLabel>
            <Box sx={{ height: 40 }}></Box>
          </StickyTableCell>
        </PrimaryTableRow>
      </TableHead>
    </ThemeProvider>
  );
}
