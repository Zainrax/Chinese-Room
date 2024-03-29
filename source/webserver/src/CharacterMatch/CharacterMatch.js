import React, { useState } from "react";
import "./CharacterMatch.css";

const CharButton = ({ char, setSelectedChar, selectedChar }) => {
  const handleChange = e => {
    setSelectedChar(e.currentTarget.value);
  };

  return (
    <div
      className={`char-match-button ${
        char === selectedChar ? "selected-char" : ""
      }`}
    >
      <label htmlFor={`char-${char}`}>{char}</label>
      <input
        type="radio"
        id={`char-${char}`}
        value={char}
        name="char"
        onChange={handleChange}
        checked={char === selectedChar}
      />
    </div>
  );
};

function CharacterMatch({ chars, index, setIndex, submission, setSubmission }) {
  const [selectedChar, setSelectedChar] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (selectedChar !== "") {
      setIndex(index + 1);
      setSubmission(submission.concat(selectedChar));
      setSelectedChar("");
    }
  };

  return (
    <div className="char-match-container">
      {index < chars.length ? (
        <h1 className="char-match-char">{chars[index]}</h1>
      ) : (
        <h1 className="char-match-done"> Done!</h1>
      )}
      <h2>Match the character</h2>
      <form onSubmit={handleSubmit} className="char-match-form" noValidate>
        <div className="char-match-button-container">
          {Array.from({ length: 8 }, (_, i) =>
            String.fromCharCode("A".charCodeAt(0) + i)
          ).map(char => {
            return (
              <CharButton
                key={char}
                char={char}
                setSelectedChar={setSelectedChar}
                selectedChar={selectedChar}
              />
            );
          })}
        </div>

        <button className="match-button">Submit</button>
      </form>
    </div>
  );
}

export default CharacterMatch;
