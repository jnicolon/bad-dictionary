import React from "react";

const trendingWords = ["self", "cross", "time", "genus", "long", "piss"];

function Trending() {
  return (
    <ul className="trending-container">
      <li className="trending-title">Trending Words:</li>
      {trendingWords.map((word, index) => {
        return (
          <li key={index} className="trending-word">
            {word}
          </li>
        );
      })}
    </ul>
  );
}

export default Trending;
