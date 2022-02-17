import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import "./style.css";

const App = ({ name }) => {
  const [Text, setText] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      import("./Text").then(({ Text }) => {
        setText(Text);
      });
    }, 5000);
  }, []);

  return Text ? Text : <p>Loading...</p>;
  // return <h1>hihi</h1>;
};

const HotApp = hot(App);

ReactDOM.render(<HotApp name="a" />, document.getElementById("root"));
