import React from "react";
import "./CharacterIndex.css";

function CharacterIndex({ chars, submission, index }) {
  const charIndex = () => {
    let items = [];
    for (let i = 0; i < chars.length; i++) {
      items.push(
        <div
          key={i}
          className={`char-index-row${
            i === submission.length
              ? " selected-char"
              : i < submission.length
              ? " submitted"
              : ""
          }`}
        >
          <div className="char-index-char">{chars[i]}</div>
          <div className="char-index-submission">
            {i < submission.length ? submission[i] : "?"}{" "}
          </div>
        </div>
      );
    }
    return items;
  };

  return (
    <div className="char-index-container">
      <h1 className="subtitle">Char Index</h1>
      {charIndex()}
    </div>
  );
}

export default CharacterIndex;
