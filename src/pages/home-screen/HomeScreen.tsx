import { useRef, useState } from "react";
import "./styles.css";
import jsPDF from "jspdf";

import Template1 from "../../components/templates/template-1/Template1";
import { DUMMY_RESUME_DATA } from "../../constants/dummy-resume-data";
import { PdfPreviewModal } from "../../components";
import EditDetailsForm from "./components/EditDetailsForm";

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
    margin: 30,
    autoPaging: "text",
  });
};

function HomeScreen() {
  const resumeContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentPdfString, setCurrentPdfString] = useState("");

  const [data, setData] = useState(DUMMY_RESUME_DATA);

  const pageWidth = a4Width - (2 * 30);
  const pageHeight = a4Height - (2 * 30) - 1;

  const handlePdfPreview = () => {
    const doc = new jsPDF("p", "px", [a4Height, a4Width]);
    const pdfElement = document.getElementById("resume");

    doc.html(pdfElement!, {
      callback: (pdf) => {
        const base64String = pdf.output("datauristring");
        setCurrentPdfString(base64String);
      },
      margin: 30,
      autoPaging: "text",
    });
  };

  return (
    <div className="app">
      <div className="header">
        <button onClick={saveAsPdf} style={{ padding: "5px"}}>
          Save as PDF
        </button>
        <button onClick={handlePdfPreview} style={{ padding: "5px"}}>
          Preview PDF
        </button>
      </div>
      <div className="resumeScrollAndMenuContainer">
        <div className="menuSection">
          <EditDetailsForm />
        </div>
        <div className="resumeScrollContainer">
          <div
            ref={resumeContainerRef} 
            className="resumeContainer"
          >
            <div id="resume"  style={{ minHeight: pageHeight, width: pageWidth }}>
              <Template1 data={data} />
            </div>
          </div>
        </div>
      </div>

      {currentPdfString && (
        <PdfPreviewModal
          pdfString={currentPdfString}
          onClose={() => setCurrentPdfString("")}
        />
      )}
    </div>
  );
}

export default HomeScreen;
