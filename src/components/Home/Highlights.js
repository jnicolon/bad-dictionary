import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import HighlightsCard from "./HighlightsCard";

function Highlights() {
  return (
    <div className="highlights-container">
      <div className="higlights-title-container">
        <h2 className="highlights-title">Selected words</h2>
        <div className="highlights-btn">
          <h2>More</h2>
          <RiArrowRightSLine className="more-arrow" />
        </div>
      </div>
      <div className="highlights-content-container">
        <HighlightsCard word="aristocracy" />
        <HighlightsCard word="accredit" />
        <HighlightsCard word="blood" />
      </div>
    </div>
  );
}

export default Highlights;
