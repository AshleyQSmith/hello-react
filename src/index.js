import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let city = {
  name: "Boise",
  country: "USA",
};

ReactDOM.render(
  // React.createElement(
  //   "ul",
  //   { style: { color: "blue" } },
  //   React.createElement("li", null, "hotdogs"),
  //   React.createElement("li", null, "hamburgers"),
  //   React.createElement("li", null, "pizza")
  // ),

  // React.createElement("h1", { style: { color: "blue" } }, "Hello!"),

  // React.createElement("h1", null, "hello-react!"),

  // JSX Syntax Examples (powered by Babel and available because this app was created by "create-react-app")

  // <ul>
  //   <li>Hotdogs</li>
  //   <li>Hamburgers</li>
  //   <li>Pizza</li>
  // </ul>,

  <h1 id="heading" className="cool-text">
    Hello from {city.name} in {city.country}!
  </h1>,

  document.getElementById("root")
);
