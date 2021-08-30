import React from "react";
import AlphabetLetter from "./AlphabetLetter";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function AlphabetMenu() {
  return (
    <div className="alphabet-menu-container">
      <ul className="alphabet-menu-inner-container">
        {alphabet.map((letter) => {
          return <AlphabetLetter letter={letter} />;
        })}
      </ul>
    </div>
  );
}

export default AlphabetMenu;
