import React from "react";

function Word({ wordObject }) {
  return (
    <div>
      <h1 className="word-page-title">
        {`${wordObject.word} ${wordObject.type}`}
      </h1>
      <p className="word-page-pargraph">{wordObject.definition}</p>
    </div>
  );
}

export default Word;
