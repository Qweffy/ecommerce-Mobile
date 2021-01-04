import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./AddToCart.css";
import axios from "axios";

const AddToCart = (props) => {
  const user = useSelector((state) => state.user);

  function addToCart(id) {
    axios
      .post(`http://localhost:4000/orders/cart`, { id: user.id })
      .then((res) => {
        axios.post(`http://localhost:4000/orders/cart/${res.data}`, {
          idproduct: id,
        });
      })
      .then();
  }

  return (
    <button
      onClick={() => {
        addToCart(props.id);
      }}
      type="button"
      className="btn btn-primary"
      disabled={props.btnDisabled}
    >
      <i class="fas fa-shopping-cart"></i>
    </button>
  );
};

export default AddToCart;
