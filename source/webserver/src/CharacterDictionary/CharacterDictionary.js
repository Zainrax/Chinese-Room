import React from "react";
import "./CharacterDictionary.css";

function CharacterDictionary() {
  const dictionary = [
    ["A", "F"],
    ["B", "C"],
    ["C", "A"],
    ["D", "G"],
    ["E", "D"],
    ["F", "B"],
    ["G", "E"],
    ["H", "C"]
  ];
  return (
    <div className="char-dictionary-container">
      <h1 className="subtitle">Rule Book</h1>
      <div className="char-dictionary-pair-container">
        {dictionary.map(pair => {
          return (
            <div key={pair[0]} className="char-dictionary-pair">
              <div className="char-dictionary-char">{pair[0]}</div>
              <svg
                height="48"
                viewBox="0 0 48 48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M-838-2232H562v3600H-838z" fill="none" />
                <path d="M16 10v28l22-14z" />
                <path d="M0 0h48v48H0z" fill="none" />
              </svg>
              <div className="char-dictionary-answer">{pair[1]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterDictionary;
