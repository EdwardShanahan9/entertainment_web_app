import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-blue-400 text-7xl">Hello World</h1>
    </>
  );
}

export default App;
