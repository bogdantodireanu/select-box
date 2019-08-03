import React from "react";
import ReactDOM from "react-dom";

import Select from "./SelectBox/Select";
import Option from "./SelectBox/Option";
import SelectManager from "./SelectBox/SelectManager";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Select Box</h1>
      <SelectManager>
        <Select>
          <Option value="1">One</Option>
          <Option value="2">Two</Option>
          <Option value="3">Three</Option>
        </Select>
      </SelectManager>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
