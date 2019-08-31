import React, { useState, useEffect } from "react";
import CharacterIndex from "../CharacterIndex";
import CharacterMatch from "../CharacterMatch";
import CharacterDictionary from "../CharacterDictionary";
import "./App.css";

function App() {
  const [chars, setChars] = useState([]);
  const [index, setIndex] = useState(0);
  const [submission, setSubmission] = useState([]);

  useEffect(() => {
    setChars(["A", "B", "C", "D"]);
  }, []);

  return (
    <div>
      <header>
        <h1>Chinese Room</h1>
      </header>
      <main className="app-container">
        <CharacterIndex chars={chars} submission={submission} index={index} />
        <CharacterMatch
          chars={chars}
          index={index}
          submission={submission}
          setSubmission={setSubmission}
          setIndex={setIndex}
        />
        <CharacterDictionary />
      </main>
    </div>
  );
}

export default App;
