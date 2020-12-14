import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import './SearchBar.css';

function SearchBar() {
  const [bar, setbar] = useState("");

  function loadbar(e) {
    setbar(e.target.value);
  }

  return (
    <div className="container-fluid">
      <form className="d-flex">
        <input
          onChange={(e) => loadbar(e)}
          type="text"
          placeholder="Search cell phones"
          className="search-input mr-sm-2 rounded px-2"
        />
        <Link to={"/catalogue/" + bar}>
          <button className="search-btn btn mx-2" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
