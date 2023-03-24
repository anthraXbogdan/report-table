import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function ThemeToggler(props) {
   const { mode, onThemeToggleClick } = props;

   return (
      <>
         <IconButton sx={{ ml: 1 }} onClick={onThemeToggleClick}>
            {mode === "dark" ? (
               <Brightness7Icon
                  sx={{
                     fontSize: "25px",
                     color: "var(--app-secondary-color)",
                  }}
               />
            ) : (
               <Brightness4Icon
                  sx={{
                     fontSize: "25px",
                     color: "var(--app-secondary-color)",
                  }}
               />
            )}
         </IconButton>
         {/* {`${mode} theme`} */}
      </>
   );
}
