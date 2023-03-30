import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import PrintIcon from "@mui/icons-material/Print";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import DownloadingIcon from "@mui/icons-material/Downloading";
import ThemeToggler from "./ThemeToggler";
import { tableData } from "../table/tableComponents/tableDataSlice";
import { getDate } from "../../helpers";

export default function TitleWrapper(props) {
  const { onPrintClick } = props;
  const [mode, setMode] = useState("light");
  const [sortedDates, setSortedDates] = useState([]);

  const rows = useSelector(tableData);

  useEffect(() => {
    const dates = [];
    rows.map((item) => {
      dates.push(item.date.date);
    });

    dates.sort((a, b) => a.localeCompare(b));
    setSortedDates(dates);
  }, [rows]);

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
        {sortedDates.length > 0 && (
          <h2>{`${getDate(sortedDates[0])} -- ${getDate(
            sortedDates[sortedDates.length - 1]
          )}`}</h2>
        )}
      </div>
    </div>
  );
}
