import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import httpRequest from "../../config/httpRequests";

function SearchBar() {
  const [word, setWord] = useState("");
  const history = useHistory();

  const handleInputChange = (e) => {
    setWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/word/${word}`);
  };

  return (
    <div>
      <form className="form-container">
        <input
          onChange={handleInputChange}
          type="text"
          className="header-search"
          placeholder="Search"
        />
        <button onClick={handleSubmit} className="search-btn" type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
