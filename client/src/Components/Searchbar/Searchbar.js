import axios from "axios";
import React, { useState, useRef } from "react";

const Searchbar = function () {
  const [product, setProduct] = useState("");
  const myRef = useRef(null);
  function onSearch(product) {
    axios
      .get("http://localhost:4000/products/search/" + product)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="container-fluid">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(product);
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
