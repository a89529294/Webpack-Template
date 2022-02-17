import React from "react";
import ReactDOM from "react-dom";

import Component from "./Component";
import "./style.css";

const App = ({ name }) => (
  <div>
    Hello {name}!!?
    <Component />
  </div>
);

ReactDOM.render(<App name="jane" />, document.getElementById("app"));
