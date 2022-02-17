import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import Component from "./Component";
import "./style.css";

const App = ({ name }) => (
  <div>
    Hello {name}!!?
    <Component />
  </div>
);

const HotApp = hot(App);

ReactDOM.render(<HotApp name="b" />, document.getElementById("root"));
