import React, { Component } from "react";
import "./App.css";

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delimiter: ",",
      lines: "2",
    };
  }

  handleChange = (e) => {
    this.setState({ delimiter: e.target.value });
    if (e.target.value != "") {
      this.props.delimiterContext(e.target.value);
    }
  };

  handleLineChange = (e) => {
    this.setState({ lines: e.target.value });
    if (e.target.value != "") {
      this.props.linesContext(e.target.value);
    }
  };

  render = () => {
    return (
      <div className="filter-container">
        Delimiter:
        <input
          type="text"
          value={this.state.delimiter}
          onChange={this.handleChange}
        />
        Lines:
        <input
          type="text"
          value={this.state.lines}
          onChange={this.handleLineChange}
        />
      </div>
    );
  };
}

export default FilterComponent;
