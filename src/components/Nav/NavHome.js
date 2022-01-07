import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import AlphabetMenu from "./AlphabetMenu";
import { Link } from "react-router-dom";

function NavHome() {
  return (
    <div>
      <div className="home-nav-container">
        <Link to="/">
          <Logo />
        </Link>
        <SearchBar />
      </div>
      <AlphabetMenu />
    </div>
  );
}

export default NavHome;
