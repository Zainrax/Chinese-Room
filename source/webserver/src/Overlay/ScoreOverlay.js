import React, { useState } from "react";

function ScoreOverlay({ resetPage, chars, submission, answers }) {
  const scoreboard = () => {
    let completeScore = [];
    console.log(answers);
    for (let i = 0; i < chars.length; i++) {
      completeScore.push(
        <div className={`score-pair${answers[i] ? " correct" : " wrong"}`}>
          <div>{chars[i]}</div>
          <div>{submission[i]}</div>
        </div>
      );
    }
    return completeScore;
  };
  return (
    <div className="overlay-container">
      <div className="overlay-inner">
        <h1>Results</h1>
        <div className="score-container">{scoreboard()}</div>
        <button type="button" className="long-button" onClick={resetPage}>
          Try Again?
        </button>
      </div>
    </div>
  );
}

export default ScoreOverlay;
