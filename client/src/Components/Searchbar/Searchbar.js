import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  const [bar, setbar] = useState("");

  function loadbar(e) {
    setbar(e.target.value);
  }

  return (
    <div className="container-fluid">
      <form className="d-flex">
        <Link onClick={() => (window.location.href = "/catalogue/" + bar)}>
          <button className="search-btn btn mx-2" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </Link>
        <input
          onChange={(e) => loadbar(e)}
          type="text"
          placeholder="Search"
          className="search-input mr-sm-2 rounded px-2"
        />
      </form>
    </div>
  );
}

export default SearchBar;
