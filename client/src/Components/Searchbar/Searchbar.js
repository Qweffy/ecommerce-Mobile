import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

const Searchbar = function ({ onSearch }) {
  const [product, setProduct] = useState("");
  const myRef = useRef(null);
  const history = useHistory();

  return (
    <div className="container-fluid">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(product);
          history.push("/catalogue/" + product);
          myRef.current.value = "";
        }}
        className="d-flex"
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setProduct(e.target.value)}
          ref={myRef}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
