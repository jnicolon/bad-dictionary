import React, { useState, useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import httpRequest from "../../config/httpRequests";

function HighlightsCard(props) {
  const word = props.word;
  const [wordObject, setWordObject] = useState({});

  useEffect(() => {
    let found = {};
    httpRequest
      .get("/singleword", {
        params: {
          word: word,
        },
      })
      .then((res) => {
        found = res.data;
        if (found.word === undefined) {
          console.log("word not found");
        } else {
          setWordObject(found);
        }
      })
      .catch((err) => console.log(err));
  }, [word]);

  return (
    <Link to={`/word/${wordObject.word}`}>
      <div className="highlights-card-container">
        <div className="highlights-card-img-container">
          <img src={wordObject.imagePath} alt={props.alt} />
        </div>
        <div className="highlights-card-text-container">
          <h2 className="highlights-card-title">{wordObject.word}</h2>
          <p className="highlights-card-text">{wordObject.definition}</p>
        </div>
        <div className="highlights-card-btn-container">
          <h3>Read more</h3>
          <RiArrowRightSLine />
        </div>
      </div>
    </Link>
  );
}

export default HighlightsCard;
