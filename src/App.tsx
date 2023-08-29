// import { useState } from "react";
// import "./App.css";


// function App() {







//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "stretch",
//         height: "100vh",
//         backgroundColor: "green",
//       }}
//     >

//       <div className="resume-container">
//         <div className="resume">
//           {skelton.map((item) => {
//             if (item.type === "header") {
//               return (
//                 <Heading
//                   key={item.id}
//                   componentSkelton={item as any}
//                   currentSelectedId={currentSelectedId}
//                   handleClick={onComponentClick}
//                 />
//               );
//             }
//             if (item.type === "subHeader") {
//               return (
//                 <SubHeading
//                   key={item.id}
//                   componentSkelton={item as any}
//                   currentSelectedId={currentSelectedId}
//                   handleClick={onComponentClick}
//                 />
//               );
//             }
//             if (item.type === "list") {
//               return (
//                 <List
//                   key={item.id}
//                   componentSkelton={item as any}
//                   currentSelectedId={currentSelectedId}
//                   handleClick={onComponentClick}
//                 />
//               );
//             }
//           })}
//           

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import jsPDF from "jspdf";
import { Heading, List, SubHeading } from "./components";

import { v4 as uuidv4 } from "uuid";

import SelectItemModal from "./components/select-item-modal/SelectItemModal";

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
  const pdfElement = document.getElementById("c-invoice"); // HTML element to be converted to PDF

  doc.html(pdfElement!, {
    callback: (pdf) => {
      pdf.save("MyPdfFile.pdf");
    },
    margin: 30,
    autoPaging: "text",
  });
};

function App() {
  const resumeContainerRef = useRef<HTMLDivElement | null>(null);
  const [numberOfPageBreaks, setNumberOfPageBreaks] = useState(0);
  const [skelton, setSkelton] = useState<{ [key: string]: any }[]>([]);
  const [currentSelectedId, setCurrentSelectedId] = useState('');
  const [showDialog, setShowDialog] = useState(false);


  const pageWidth = a4Width - 60;
  const pageHeight = a4Height - 60;

  const handleItemSelection = (itemType: string) => {
    setShowDialog(false);
    const id = uuidv4();
    let newItem: any;
    switch (itemType) {
      case 'subHeader':
        newItem = { type: "subHeader", id, value: "SubHeading" };
        break;
      case 'header':
        newItem = { type: "header", id, value: "Heading" };
        break;
      case 'list':
        newItem = { type: "list", id, header: "List Heading", items: ['item 1', 'item2'] };
        break;
      default:
        newItem = { type: "subHeader", id, value: "SubHeading" };
    }
    setSkelton((prev) => {
      const newSkelton = [...prev];
      newSkelton.push(newItem);
      return newSkelton;
    });
  };

    const onComponentClick = (id: string) => {
    setCurrentSelectedId(id);
  };

  const handleAddElement = () => {
    setShowDialog(true);
  };

  useLayoutEffect(() => {
    const resumeContainerHight = resumeContainerRef.current?.offsetHeight || 0;
    setNumberOfPageBreaks(
      calculateNumberOfPageBreaks({
        totalHeight: resumeContainerHight,
        pageHeight,
      })
    );

    console.log({ resumeContainerHight });
  }, [pageHeight]);

  return (
    <div className="app">
      <div className="header">
        <button onClick={saveAsPdf} style={{ padding: "5px" }}>
          Save as PDF
        </button>
      </div>
      <div className="resumeScrollAndMenuContainer">
        <div className="menuSection">
          <button
            className="hide-on-print"
            onClick={handleAddElement}
          >
            Add Item
          </button>
          {
            showDialog && (
              <SelectItemModal onClose={() => setShowDialog(false)} onItemSelection={handleItemSelection} />
            )
          }
        </div>
        <div className="resumeScrollContainer">
          <div ref={resumeContainerRef} className="resumeContainer" style={{ minHeight: a4Height }}>
            {new Array(numberOfPageBreaks).fill(0).map((_, index) => {
              return (
                <div
                  className="pageBreakIndicator"
                  style={{ top: (pageHeight * (index + 1)) + 30 }}
                />
              );
            })}
            <div id="c-invoice" className="document" style={{ width: pageWidth }}>

              {skelton.map((item) => {
                if (item.type === "header") {
                  return (
                    <Heading
                      key={item.id}
                      componentSkelton={item as any}
                      currentSelectedId={currentSelectedId}
                      handleClick={onComponentClick}
                    />
                  );
                }
                if (item.type === "subHeader") {
                  return (
                    <SubHeading
                      key={item.id}
                      componentSkelton={item as any}
                      currentSelectedId={currentSelectedId}
                      handleClick={onComponentClick}
                    />
                  );
                }
                if (item.type === "list") {
                  return (
                    <List
                      key={item.id}
                      componentSkelton={item as any}
                      currentSelectedId={currentSelectedId}
                      handleClick={onComponentClick}
                    />
                  );
                }
              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
