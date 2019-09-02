import React, { useState } from "react";

function LandingOverlay({ initPage }) {
  const [start, setStart] = useState(false);
  const handleClick = () => {
    initPage();
    setStart(true);
  };

  return (
    <div className="overlay-container" style={start ? { display: "none" } : {}}>
      <div className="overlay-inner">
        <header>
          <h1>What is intelligence?</h1>
        </header>
        <article className="landing-description">
          <p>
            If a computer had all the perfect responses coded to any input, and
            gave the right answer, would that be intelligence? or is it memory
            and lookups that mimics intelligence?
          </p>
          <p>
            The Chinese room experiment is a thought experiment that covers this
            topic, you can find more information about it:{" "}
            <a href="http://www.scholarpedia.org/article/Chinese_room_argument">
              here
            </a>
          </p>
          <p>
            This application is simulation of this concept using characters and
            responses that are meaningless to the user. <br></br>
            You have three sections: <br></br>
            <strong>Char Index</strong> - you are given a set of random
            characters that you have no meaning of. <br></br>
            <strong>Submission</strong> - Click the character to match to the
            highlighted character. <br></br>
            <strong>Rule Book</strong> -This is the mapping between any
            character to the right output.
          </p>
        </article>
        <button type="button" onClick={handleClick} className="long-button">
          Start
        </button>
      </div>
    </div>
  );
}

export default LandingOverlay;
