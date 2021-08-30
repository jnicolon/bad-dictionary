import React from "react";

function AlphabetLetter(props) {
  return (
    <li className="alphabet-letter-outter">
      <div className="alphabet-letter-container">
        <h2 className="alphabet-letter">{props.letter}</h2>
      </div>
    </li>
  );
}

export default AlphabetLetter;
