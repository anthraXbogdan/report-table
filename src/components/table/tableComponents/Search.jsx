import { useDispatch } from "react-redux";
import { searchSubjectUpdated } from "./searchSubjectSlice";
import { setToFirstPage } from "./pageSlice";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 12,
          color: "var(--table-primary-color)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--table-secondary-color)",
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--table-primary-color)",
          },
          "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--table-secondary-color)",
              borderWidth: 2,
            },
          "& .MuiOutlinedInput-root .MuiAutocomplete-endAdornment": {
            top: "calc(50% - 10px)",
          },
          "& .MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-clearIndicator":
            {
              color: "var(--table-secondary-color)",
            },
          "& .MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-clearIndicator:hover":
            {
              backgroundColor: "var(--table-hover-background-color)",
            },
        },
      },
    },
  },
});

export default function Search(props) {
  const { searchSubject, onSearchChange } = props;

  const dispatch = useDispatch();

  const handleInputClick = () => {
    dispatch(setToFirstPage());
    dispatch(searchSubjectUpdated(searchSubject.toLowerCase()));
  };

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        freeSolo
        disableClearable
        size="small"
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            placeholder={`Search by ${searchSubject}`}
            variant="outlined"
            onChange={onSearchChange}
            onClick={handleInputClick}
          />
        )}
        clearOnBlur={true}
      ></Autocomplete>
    </ThemeProvider>
  );
}
