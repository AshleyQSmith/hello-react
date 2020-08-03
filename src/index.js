import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  // dependancy array added to useEffect - second argument sent. its the state variable we want to listen to changes in - limits scope/smart rendering.

  useEffect(() => {
    console.log(`field 1: ${val}`);
  }, [val]);
  useEffect(() => {
    console.log(`field 2: ${val2}`);
  }, [val2]);
  return (
    <>
      <label>
        Fave phrase: {val}
        <input value={val} onChange={(e) => setVal(e.target.value)} />
      </label>
      <br />
      <label>
        2nd Fave phrase: {val2}
        <input value={val2} onChange={(e) => setVal2(e.target.value)} />
      </label>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
