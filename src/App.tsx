import { useEffect, useState } from "react";
import "./App.css";
import { generateInstantCharacter } from "./character-generator/generate-instant-character";
import { Character } from "./character-generator/character/character";
import { logCharacter } from "./character-generator/log-character";

function App() {
  const [character, setCharacter] = useState<Character>();
  const [pdfUrl, setPdfUrl] = useState<string>();

  async function onClick() {
    const { pdfUrl: _pdfUrl, character: _character } =
      await generateInstantCharacter();
    setCharacter(_character);
    setPdfUrl(_pdfUrl);
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
          {!!character && !!pdfUrl && (
            <div className="result">
              <h1>{character.name}</h1>
              <h4>the</h4>
              <h2>
                {character.characteristics.ancestry}{" "}
                {character.profile.vocation.name} of {character.origins.region}
              </h2>
              {character.isDead && <h3>Died after encountering Pale Stone</h3>}
              <a
                className="download-link"
                href={pdfUrl}
                download={`${character.name}.pdf`}
              >
                <button>Download PDF</button>
              </a>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
