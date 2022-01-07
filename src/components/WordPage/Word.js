import React from "react";

function Word({ wordObject }) {
  console.log(wordObject);
  return (
    <div>
      <img
        className="word-page-image"
        src={`${wordObject.imagePath}`}
        alt={`${wordObject.word}`}
      />
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
