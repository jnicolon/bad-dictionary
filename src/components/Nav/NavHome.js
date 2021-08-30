import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Trending from "./Trending";
import AlphabetMenu from "./AlphabetMenu";

function NavHome() {
  return (
    <div>
      <div className="home-nav-container">
        <Logo />
        <SearchBar />
        <Trending />
      </div>
      <AlphabetMenu />
    </div>
  );
}

export default NavHome;
