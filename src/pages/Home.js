import React from "react";
import Highlights from "../components/Home/Highlights";
import HomeContent from "../components/Home/HomeContent";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-content-container">
      <Highlights />
      <HomeContent />
      <Link to="/admin/addword">
        <button>Go to add word</button>
      </Link>
    </div>
  );
}

export default Home;
