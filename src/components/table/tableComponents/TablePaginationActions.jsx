import { useSelector, useDispatch } from "react-redux";
import { page } from "./pageSlice";
import {
  incrementPage,
  decrementPage,
  setToFirstPage,
  setToLastPage,
} from "./pageSlice";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

export default function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, rowsPerPage, onPageChange } = props;

  const pageTracker = useSelector(page);
  const dispatch = useDispatch();

  const handleFirstPageButtonClick = () => {
    dispatch(setToFirstPage());
  };

  const handleBackButtonClick = () => {
    dispatch(decrementPage());
  };

  const handleNextButtonClick = () => {
    dispatch(incrementPage());
  };

  const handleLastPageButtonClick = () => {
    dispatch(setToLastPage(Math.max(0, Math.ceil(count / rowsPerPage) - 1)));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={pageTracker.value === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={pageTracker.value === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={pageTracker.value >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={pageTracker.value >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
