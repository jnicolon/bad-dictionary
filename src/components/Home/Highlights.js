import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

function Highlights() {
  return (
    <div className="higlights-title-conteiner">
      <h2 className="highlights-title">Recomended words</h2>
      <div className="highlights-btn">
        <h2>More</h2>
        <RiArrowRightSLine className="more-arrow" />
      </div>
    </div>
  );
}

export default Highlights;
