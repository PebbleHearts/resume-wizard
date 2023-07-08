import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import { Heading, SubHeading } from "./components";

function App() {
  const [skelton, setSkelton] = useState<{ [key: string]: any }[]>([]);
  const [currentSelectedId, setCurrentSelectedId] = useState('');
  console.log('selectedID: ', currentSelectedId);

  const handleAddElement = () => {
    setSkelton((prev) => {
      const newSkelton = [...prev];
      const id = uuidv4();
      newSkelton.push({ type: "subheader", id, value: "SubHeading" });
      return newSkelton;
    });
  };

  const onComponentClick = (id: string) => {
    setCurrentSelectedId(id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        height: "100vh",
        backgroundColor: "green",
      }}
    >
      <div className="header hide-on-print">
        <button onClick={window.print} style={{ padding: "5px" }}>
          Save as PDF
        </button>
      </div>

      <div className="resume-container">
        <div className="resume">
          {skelton.map((item) => {
            if (item.type === "header") {
              return (
                <Heading
                  componentSkelton={item as any}
                  currentSelectedId={currentSelectedId}
                  handleClick={onComponentClick}
                />
              );
            }
            if (item.type === "subheader") {
              return (
                <SubHeading
                  componentSkelton={item as any}
                  currentSelectedId={currentSelectedId}
                  handleClick={onComponentClick}
                />
              );
            }
          })}
          <button
            className="hide-on-print"
            onClick={handleAddElement}
            style={{ alignSelf: "flex-start" }}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
