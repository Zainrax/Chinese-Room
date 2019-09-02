import React, { useState, useEffect } from "react";
import CharacterIndex from "../CharacterIndex";
import CharacterMatch from "../CharacterMatch";
import CharacterDictionary from "../CharacterDictionary";
import { ScoreOverlay, LandingOverlay } from "../Overlay";
import "./App.css";

function App() {
  const [chars, setChars] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submission, setSubmission] = useState([]);

  const initPage = () => {
    fetch("http://localhost:3003/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setChars(data.DATA);
      })
      .catch(console.log);
  };

  useEffect(() => {
    setChars(["A", "B", "C", "D"]);
  }, []);

  useEffect(() => {
    if (submission.length === chars.length && chars.length !== 0) {
      fetch("http://localhost:3003/", {
        method: "POST",
        body: JSON.stringify({ DATA: submission }),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(data => {
          setAnswers(data.DATA);
        });
    }
  }, [index]);

  return (
    <div>
      <header>
        <h1>Chinese Room Simulation</h1>
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
        {answers.length === 0 ? (
          <LandingOverlay initPage={initPage} />
        ) : (
          <ScoreOverlay
            chars={chars}
            submission={submission}
            answers={answers}
          />
        )}
      </main>
    </div>
  );
}

export default App;
