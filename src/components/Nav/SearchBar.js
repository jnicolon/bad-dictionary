import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div>
      <form className="form-container">
        <input type="text" className="header-search" placeholder="Search" />
        <button className="search-btn" type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
