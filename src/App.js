import React, { useState } from "react";
import TableComponent from "./TableComponent";
import FilterComponent from "./FilterComponent";
import ButtonComponent from "./ButtonComponent";
import textFileContent from "./data.txt";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [delimiter, setDelimiter] = useState(",");
  const [lines, setLines] = useState(2);
  const [textContent, setTextContent] = useState(textFileContent);

  const delimiterContext = (val) => {
    setDelimiter(val);
  };
  const linesContext = (val) => {
    setLines(val);
  };
  const testContext = (val) => {
    setTextContent(val);
  };

  return (
    <div className="main-container">
      <ButtonComponent testContext={testContext} />
      <FilterComponent
        delimiterContext={delimiterContext}
        linesContext={linesContext}
      />
      <TableComponent
        delimiter={delimiter}
        linesCount={lines}
        textContent={textContent}
      />
    </div>
  );
}

export default App;
