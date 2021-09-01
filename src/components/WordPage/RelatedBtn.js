import React from "react";
import { Link } from "react-router-dom";

function RelatedBtn({ word }) {
  return (
    <Link to={`/word/${word}`}>
      <div className="related-btn">
        <p>{word}</p>
      </div>
    </Link>
  );
}

export default RelatedBtn;
