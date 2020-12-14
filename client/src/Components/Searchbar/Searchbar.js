import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

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
          placeholder="Search"
          className="mr-sm-2"
        />
        <Link to={"/catalogue/" + bar}>
          <button>Buscar</button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
