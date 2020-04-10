import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function ButtonComponent(props) {
  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      let text = e.target.result;
      props.testContext(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div className="button-container">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">
            Upload
          </span>
        </div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
            onChange={showFile}
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>
        </div>
      </div>
    </div>
  );
}

export default ButtonComponent;
