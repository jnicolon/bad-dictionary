import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

function HighlightsCard(props) {
  return (
    <div className="highlights-card-container">
      <div className="highlights-card-img-container">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="highlights-card-text-container">
        <h2 className="highlights-card-title">{props.title}</h2>
        <p className="highlights-card-text">{props.text}</p>
      </div>
      <div className="highlights-card-btn-container">
        <h3>Read more</h3>
        <RiArrowRightSLine />
      </div>
    </div>
  );
}

export default HighlightsCard;
