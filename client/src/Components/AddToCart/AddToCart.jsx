import React from "react";
import { useSelector } from "react-redux";
import "./AddToCart.css";
import axios from "axios";

const AddToCart = (props) => {
  const { user } = useSelector((state) => state.auth);

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
      disabled={props.btnDisabled}
    >
      <strong>ADD TO CART</strong>
    </button>
  );
};

export default AddToCart;
