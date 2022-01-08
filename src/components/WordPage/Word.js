import React from "react";
import ReactAudioPlayer from "react-audio-player";

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
      {wordObject.audioPath && (
        <ReactAudioPlayer src={wordObject.audioPath} controls />
      )}
    </div>
  );
}

export default Word;
