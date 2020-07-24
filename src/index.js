import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  React.createElement("h1", { style: { color: "blue" } }, "Hello!"),
  // React.createElement("h1", null, "hello-react!"),
  document.getElementById("root")
);
