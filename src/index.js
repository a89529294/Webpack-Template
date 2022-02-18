import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { sortBy } from "lodash-es";

import myPNG from "./assets/myPNG.png";
import mySVG from "./assets/mySVG.svg";
import "./style.css";

const App = ({ name }) => (
  <div>
    Hello {name}!!?
    <img src={myPNG} alt="" style={{ width: "100px" }} />
    <img src={mySVG} alt="" style={{ width: "100px" }} />
  </div>
);

const HotApp = hot(App);

ReactDOM.render(<HotApp name="a" />, document.getElementById("root"));
