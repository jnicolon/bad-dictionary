import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import HighlightsCard from "./HighlightsCard";

import Jelly from "../../assets/jelly.jpg";
import Shoulder from "../../assets/shoulder.jpg";
import Two from "../../assets/two.jpg";

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
        <HighlightsCard
          src={Jelly}
          alt="Jelly"
          title="Jelly"
          text="Jellylike food that’s most commonly used in a peanut butter & jelly sandwich. Peanut butter’s the brown stuff. Jelly’s the other stuff. It’s the jelly."
        />
        <HighlightsCard
          src={Shoulder}
          alt="Shoulder"
          title="Shoulder"
          text="Look left. Now look down. That’s your shoulder. Now look right. And look down. That’s your other shoulder."
        />
        <HighlightsCard
          src={Two}
          alt="Two"
          title="Two"
          text="It’s this thing: 2. It’s one more than one. It’s the second number, so it’s a big deal. So yeah, if you saw a goat, and then another goat came along, you’d be like, “Check it out, it’s two goats.” If you just saw one goat, though, you wouldn’t be like, “Check it out - one goat.” You’d just say, “Check it out - a goat.” So yeah, anyway, two is 2."
        />
      </div>
    </div>
  );
}

export default Highlights;
