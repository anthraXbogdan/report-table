import { useState } from "react";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import PrintIcon from "@mui/icons-material/Print";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import DownloadingIcon from "@mui/icons-material/Downloading";
import ThemeToggler from "../ThemeToggler";
import { dateRange } from "../table/tableComponents/tableDataSlice";

export default function TitleWrapper(props) {
  const { onPrintClick } = props;
  const [mode, setMode] = useState("light");

  const range = useSelector(dateRange);

  const handleThemeToggleClick = () => {
    document.documentElement.classList.toggle("dark");
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <div className="title-wrapper">
      <div className="actions">
        <div className="clock-wrapper">
          <IconButton>
            <AvTimerIcon
              sx={{
                fontSize: "35px",
                color: "var(--app-secondary-color)",
              }}
            ></AvTimerIcon>
          </IconButton>
          tack
        </div>
        <div className="actions-wrapper">
          <div>
            <ThemeToggler
              onThemeToggleClick={handleThemeToggleClick}
              mode={mode}
            />
          </div>
          <div>
            <IconButton onClick={onPrintClick}>
              <PrintIcon
                sx={{
                  fontSize: "25px",
                  color: "var(--app-secondary-color)",
                }}
              ></PrintIcon>
            </IconButton>
            Print
          </div>
          <div>
            <IconButton onClick={onPrintClick}>
              <DownloadingIcon
                sx={{
                  fontSize: "25px",
                  color: "var(--app-secondary-color)",
                }}
              ></DownloadingIcon>
            </IconButton>
            Download PDF
          </div>
        </div>
      </div>
      <div className="title">
        <h1>Detailed Time Report</h1>
        <h2>
          {range[0]} - {range[1]}
        </h2>
      </div>
    </div>
  );
}
