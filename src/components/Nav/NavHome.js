import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Trending from "./Trending";

function NavHome() {
  return (
    <div className="home-nav-container">
      <Logo />
      <SearchBar />
      <Trending />
    </div>
  );
}

export default NavHome;
