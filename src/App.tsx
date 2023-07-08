import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { generateInstantCharacter } from "./character-generator/generate-instant-character";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={generateInstantCharacter}>Generate Character</button>
      </header>
    </div>
  );
}

export default App;
