import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// RENDERING LISTS

// const lakeList = ["Echo Lake", "Cascade Lake", "Maud Lake"];

// function App(props) {
//   return (
//     <ul>
//       {props.lakes.map((lake) => (
//         <li>{lake}</li>
//       ))}
//     </ul>
//   );
// }

// or DESTRUCTURED VERSION:
// function App({ lakes }) {
//   return (
//     <ul>
//       {lakes.map((lake) => (
//         <li>{lake}</li>
//       ))}
//     </ul>
//   );
// }

// RENDERING LISTS OF OBJECTS + ADDING KEYS: identifier for dynamically rendered elemtent, in this case the id (gets rid of console error)
// FYI FOR ARRAY OF NUMBERS TO BE RENDERED WITHOUT ID, YOU CAN SET THE key={item.toString()}

const lakeList = [
  { id: "1", name: "Echo", trailhead: "Echo" },
  { id: "2", name: "Velma", trailhead: "Bayview" },
  { id: "3", name: "Maud", trailhead: "Wrights" },
];

function App({ lakes }) {
  return (
    <div>
      {lakes.map((lake) => (
        <div key={lake.id}>
          <h1>{lake.name} Lake</h1>
          <p>Accessed by {lake.trailhead} Trailhead</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App lakes={lakeList} />, document.getElementById("root"));
