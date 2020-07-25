import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// COMPOSING COMPONENTS

// function Lake(props) {
//   return <h1>{props.name}</h1>;
// }

// or destructured:
function Lake({ name }) {
  return <h1>{name}</h1>;
}

function App() {
  return (
    <div>
      <Lake name="Lake Tahoe" />
      <Lake name="Angora Lake" />
      <Lake name="Shirley Lake" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
