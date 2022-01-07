import React from "react";

function Word({ wordObject }) {
  console.log(wordObject);
  return (
    <div>
      <h1 className="word-page-title">
        {wordObject.word && `${wordObject.word}`}
      </h1>
      <p className="word-page-pargraph">
        {wordObject.definition && wordObject.definition}
      </p>
    </div>
  );
}

export default Word;
