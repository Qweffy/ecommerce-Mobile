import React, { useEffect, useState } from "react";
import "./AddToCart.css";
import { addToCart } from "../../store/Actions/cartActions";
import { connect } from "react-redux";

const AddToCartInvite = (props) => {
  return (
    <button
      onClick={() => props.addToCart(props.product)}
      type="button"
      className="btn btn-primary"
      disabled={props.btnDisabled}
    >
      {console.log(props.product)}
      <i class="fas fa-shopping-cart"></i>
    </button>
  );
};

export default connect((state) => ({ products: state.products }), {
  addToCart,
})(AddToCartInvite);
