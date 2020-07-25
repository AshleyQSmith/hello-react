import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// JSX Syntax Example object:
// let city = {
//   name: "Boise",
//   country: "USA",
// };

// function Hello(props) {
//   console.log(Object.keys(props));
//   return (
//     <div>
//       <h1>Welcome to {props.library}!</h1>
//       <p>Let's get started</p>
//       <p>{props.message}</p>
//       <p>{Object.keys(props).length} Props Total</p>
//     </div>
//   );
// }

// easier to read version: instead of passing in "props", you destructure values from the props object for brevity (shortening syntax). allows you to read exaclty the values
function Hello({ library, message, number }) {
  return (
    <div>
      <h1>Welcome to {library}!</h1>
      <p>Let's get started</p>
      <p>{message}</p>
      <p>{number} Props Total</p>
    </div>
  );
}

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

  // <h1 id="heading" className="cool-text">
  //   Hello from {city.name} in {city.country}!
  // </h1>,

  // CREATING A REACT COMPONENT
  // Adding properties to the react component

  <Hello library="React" message="Good Luck!" number={1} />,

  document.getElementById("root")
);
