import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import { styled } from "@mui/material/styles";

const PrimaryTableCell = styled(TableCell)({
   backgroundColor: "var(--table-primary-background-color)",
   color: "var(--table-primary-color)",
   fontSize: 12,
   paddingBlockStart: 1,
   paddingBlockEnd: 1,
   zIndex: "+100",
});

const SecondaryTableCell = styled(TableCell)({
   fontSize: 10,
   paddingBlockStart: 0,
   paddingBlockEnd: 11,
   backgroundColor: "var(--table-primary-background-color)",
   color: "var(--table-secondary-color)",
});

const StickyTableCell = styled(TableCell)({
   position: "sticky",
   right: 0,
   minWidth: 95,
   backgroundColor: "var(--table-primary-background-color)",
   color: "var(--table-primary-color)",
   borderInlineStart: "1px solid var(--table-border-color)",
   fontSize: 13,
   paddingBlockStart: 1,
   paddingBlockEnd: 1,
   fontWeight: "400",
   zIndex: "+200",
});

const PaginationTableCell = styled(TableCell)({
   borderBlockStart: "1px solid var(--table-border-color)",
});

const PrimaryTableRow = styled(TableRow)({
   height: 40,
});

const SmallTableRow = styled(TableRow)({
   height: 10,
});

const PaginationTableRow = styled(TableRow)({
   borderBlockStart: "1px solid var(--table-border-color)",
});

const CustomTableFooter = styled(TableFooter)({
   position: "sticky",
   bottom: 0,
   backgroundColor: "var(--table-primary-background-color)",
   zIndex: "+200",
});

export {
   PrimaryTableCell,
   SecondaryTableCell,
   StickyTableCell,
   PaginationTableCell,
   PrimaryTableRow,
   SmallTableRow,
   PaginationTableRow,
   CustomTableFooter,
};
