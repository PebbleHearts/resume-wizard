import { useRef, useState } from "react";
import "./styles.css";
import jsPDF from "jspdf";

import Template1 from "../../components/templates/template-1/Template1";
import { DUMMY_RESUME_DATA } from "../../constants/dummy-resume-data";

const calculateNumberOfPageBreaks = ({
  totalHeight,
  pageHeight,
}: {
  totalHeight: number;
  pageHeight: number;
}) => {
  const numberOfPages = Math.floor(totalHeight / pageHeight);
  return numberOfPages;
};

const a4Height = 1404;
const a4Width = 990;

const saveAsPdf = () => {
  const doc = new jsPDF("p", "px", [a4Height, a4Width]);
  const pdfElement = document.getElementById("resume");

  doc.html(pdfElement!, {
    callback: (pdf) => {
      pdf.save("MyPdfFile.pdf");
    },
    margin: 0,
    autoPaging: "text",
  });
};

function HomeScreen() {
  const resumeContainerRef = useRef<HTMLDivElement | null>(null);

  const [data, setData] = useState(DUMMY_RESUME_DATA);

  const pageWidth = a4Width;
  const pageHeight = a4Height - 1;


  return (
    <div className="app">
      <div className="header">
        <button onClick={saveAsPdf} style={{ padding: "5px" }}>
          Save as PDF
        </button>
      </div>
      <div className="resumeScrollAndMenuContainer">
        <div className="menuSection">
        </div>
        <div className="resumeScrollContainer">
          <div
            ref={resumeContainerRef}
            id="resume"
            className="resumeContainer"
            style={{ minHeight: pageHeight, width: pageWidth }}
          >
            <Template1 data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
