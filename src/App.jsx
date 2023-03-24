import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ReportTable } from "./components/table/ReportTable";
import TitleWrapper from "./components/header/TitleWrapper";
import SummaryWrapper from "./components/header/SummaryWrapper";
import "./App.css";

export default function App() {
  const componentRef = useRef();

  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Time Report Table",
    // onAfterPrint: () => alert("Document printed!"),
  });

  return (
    <div className="App">
      <div className="header">
        <TitleWrapper onPrintClick={handlePrintClick}></TitleWrapper>
        <SummaryWrapper />
      </div>
      <div className="table-wrapper">
        <div className="table">
          <ReportTable ref={componentRef} />
        </div>
      </div>
    </div>
  );
}
