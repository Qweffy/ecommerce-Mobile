import React from "react";
import "./AddToCart.css";
import { addToCart } from "../../store/Actions/cartActions";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

const AddToCartInvite = (props) => {
  return (
    <button
      onClick={() => props.addToCart(props.product)}
      type="button"
      className="btn btn-primary"
      disabled={props.btnDisabled}
    >
      <i class="fas fa-shopping-cart"></i>
    </button>
  );
};

export default connect((state) => ({ products: state.products }), {
  addToCart,
})(AddToCartInvite);
