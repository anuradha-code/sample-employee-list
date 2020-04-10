import React, { Component } from "react";
import "./App.css";

class TableComponent extends Component {
  constructor(props) {
    super(props);
  }

  RenderCol = (colData) => {
    if (colData === "NoData") {
      return <td>No Data Found.</td>;
    } else {
      //need to show only 4 values and truncate the rest.
      let columns = colData.slice(0, 4);
      return columns.map((val, index) => {
        return <td key={index}>{val}</td>;
      });
    }
  };

  RenderRow = (rowData) => {
    let rowCount = 1;
    if (rowData === "NoData") {
      return (
        <tr>
          <td>No Data Found.</td>
        </tr>
      );
    } else {
      return rowData.map((val, index) => {
        let delimiter = this.props.delimiter;
        let colData = val ? val.split(delimiter) : "NoData";
        if (colData.length > 1 && rowCount <= this.props.linesCount) {
          rowCount++;
          return <tr key={index}>{this.RenderCol(colData)}</tr>;
        }
      });
    }
  };

  render = () => {
    const { textContent } = this.props;
    let rowData = textContent ? textContent.split("\n") : "NoData";
    return (
      <div>
        <div>
          <table
            border="1"
            cellPadding="2"
            cellSpacing="2"
            className="tableSec"
          >
            <tbody>{this.RenderRow(rowData)}</tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default TableComponent;
