import React from "react";
import { Link } from "react-router-dom";

const trendingWords = ["self", "cross", "time", "genus", "long", "piss"];

function Trending() {
  return (
    <ul className="trending-container">
      <li className="trending-title">Trending Words:</li>
      {trendingWords.map((word, index) => {
        return (
          <Link to={`/word/${word}`}>
            <li key={index} className="trending-word">
              {word}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Trending;
