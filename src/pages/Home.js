import React from "react";
import Highlights from "../components/Home/Highlights";
import HomeContent from "../components/Home/HomeContent";

function Home() {
  return (
    <div className="main-content-container">
      <Highlights />
      <HomeContent />
    </div>
  );
}

export default Home;
