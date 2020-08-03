import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function GithubUser({ login }) {
  const [data, setData] = useState(null);
  // fetching data with useEffect
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    return (
      <div>
        {JSON.stringify(data)}
        <h1>User: {data.login}</h1>
        <h3>Name: {data.name}</h3>
        <img src={data.avatar_url} width={100} />
      </div>
    );
  }
  return null;
}

function App() {
  return <GithubUser login="ashleyqsmith" />;
}

ReactDOM.render(<App />, document.getElementById("root"));
