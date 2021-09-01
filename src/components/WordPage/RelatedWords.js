import React from "react";
import RelatedBtn from "./RelatedBtn";

function RelatedWords({ wordObject }) {
  return (
    <div className="related-words-container">
      <h3>{`Entries related to ${wordObject.word}`}</h3>
      <ul>
        {wordObject.related &&
          wordObject.related.map((word) => {
            return (
              <li>
                <RelatedBtn word={word} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default RelatedWords;
