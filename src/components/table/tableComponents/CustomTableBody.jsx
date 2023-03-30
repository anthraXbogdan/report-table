import { useSelector } from "react-redux";
import { page } from "./pageSlice";
import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import {
  PrimaryTableCell,
  SecondaryTableCell,
  StickyTableCell,
  SmallTableRow,
  PrimaryTableRow,
} from "./customTableCells";
import { getTime, getDate } from "../../../helpers";

export default function CustomTableBody(props) {
  const {
    rows,
    order,
    orderBy,
    rowsPerPage,
    emptyRows,
    stableSort,
    getComparator,
  } = props;

  const pageTracker = useSelector(page);

  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy))
        .slice(
          pageTracker.value * rowsPerPage,
          pageTracker.value * rowsPerPage + rowsPerPage
        )
        .map((row, index) => (
          <React.Fragment key={index}>
            <PrimaryTableRow
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
                "& td": { borderBlockEnd: 0 },
              }}
            >
              <PrimaryTableCell>{getDate(row.date.date)}</PrimaryTableCell>
              <PrimaryTableCell sx={{ fontWeight: "600" }}>
                {row.project.project}
              </PrimaryTableCell>
              <PrimaryTableCell>{row.task.task}</PrimaryTableCell>
              <PrimaryTableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt={row.person.person}
                    src={row.person.avatar}
                    sx={{
                      width: 24,
                      height: 24,
                      marginInlineEnd: 1,
                    }}
                  ></Avatar>
                  {row.person.person}
                </Box>
              </PrimaryTableCell>
              <StickyTableCell
                align="right"
                sx={{
                  zIndex: "+100",
                }}
              >
                {getTime(row.hours.hours)}
              </StickyTableCell>
            </PrimaryTableRow>
            <SmallTableRow>
              <SecondaryTableCell></SecondaryTableCell>
              <SecondaryTableCell colSpan="2">
                {row.project.description}
              </SecondaryTableCell>
              <SecondaryTableCell></SecondaryTableCell>
              <StickyTableCell
                align="right"
                sx={{
                  zIndex: "+100",
                }}
              ></StickyTableCell>
            </SmallTableRow>
          </React.Fragment>
        ))}
      {emptyRows > 0 && (
        <TableRow style={{ height: 73 * emptyRows }}>
          <TableCell colSpan={5} />
        </TableRow>
      )}
    </TableBody>
  );
}
