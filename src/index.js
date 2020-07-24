import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  React.createElement(
    "ul",
    { style: { color: "blue" } },
    React.createElement("li", null, "hotdogs"),
    React.createElement("li", null, "hamburgers"),
    React.createElement("li", null, "pizza")
  ),

  // React.createElement("h1", { style: { color: "blue" } }, "Hello!"),

  // React.createElement("h1", null, "hello-react!"),

  document.getElementById("root")
);
