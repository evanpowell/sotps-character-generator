import { useEffect, useState } from "react";
import "./App.css";
import { generateInstantCharacter } from "./character-generator/generate-instant-character";
import { Character } from "./character-generator/character/character";
import { logCharacter } from "./character-generator/log-character";

function App() {
  const [character, setCharacter] = useState<Character>();

  function onClick() {
    setCharacter(generateInstantCharacter());
  }

  useEffect(() => {
    if (character) {
      logCharacter(character);
    }
  }, [character]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <button className="generate-btn" onClick={onClick}>
            Generate Character
          </button>
          {!!character && (
            <div className="result">
              <h3>You are</h3>
              <h1>{character.name}</h1>
              <h4>the</h4>
              <h2>
                {character.characteristics.ancestry}{" "}
                {character.profile.vocation.name} of {character.origins.region}
              </h2>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
