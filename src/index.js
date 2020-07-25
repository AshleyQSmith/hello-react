import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// CONDITIONAL RENDERING

function Lake({ name }) {
  return (
    <div>
      <h1>Visit {name} Lake!</h1>
    </div>
  );
}

function SkiResort({ name }) {
  return (
    <div>
      <h1>Visit {name} Resort!</h1>
    </div>
  );
}

// function App(props) {
//   if (props.season === "summer") {
//     return <Lake name="Jenny" />;
//   } else if (props.season === "winter") {
//     return <SkiResort name="Jackson Hole Mountain" />;
//   }
// }

// REFACTORED OPTION

function App(props) {
  return (
    <div>
      {props.season === "summer" ? (
        <Lake name="Jenny" />
      ) : props.season === "winter" ? (
        <SkiResort name="Jackson Hole" />
      ) : (
        <h1>Come back in summer or winter!</h1>
      )}
    </div>
  );
}

ReactDOM.render(<App season="summer" />, document.getElementById("root"));
