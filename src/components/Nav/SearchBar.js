import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <div>
      <form className="form-container">
        <input type="text" className="header-search" placeholder="Search" />
        <button className="search-btn" type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
