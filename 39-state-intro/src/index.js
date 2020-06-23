import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const paintings = [
  { title: "cat", dominantColour: "red" },
  { title: "dog", dominantColour: "brown" },
  { title: "panther", dominantColour: "black" },
  { title: "lion", dominantColour: "yellow" },
  { title: "snake", dominantColour: "green" },
];

ReactDOM.render(
  <React.StrictMode>
    <App paintings={paintings} />
  </React.StrictMode>,
  document.getElementById("root")
);
