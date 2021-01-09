import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import "./cartInvite.css";
import ItemCartInvite from "../itemCart/ItemCartInvite";

const CartInvite = () => {
  const { cartItems } = useSelector(state => state.cart);
  const { TotalOrden } = useSelector(state => state.cart);

  useEffect( ()=>{
    
  
  }, [])


  return (
    <div className=" cart-invnt container d-flex">
      <div className="row justify-content-end">
        <div className="col-12">
          <h3>Shopping Cart</h3>
          <hr />
          <table className="table table-borderless">
            <thead className="table-secondary">
              <tr className="text-center">
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Stock</th>
                <th scope="col">Total</th>
                <th scope="col"> Delete </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((product, index) => {
                return (
                  <ItemCartInvite
                    key={index}
                    product={product}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <div>
            <p>Subtotal: {TotalOrden}</p>
          </div>
          <h3> Total: </h3>
          <div>
            <button> Next </button>
            <button> Cancel </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => {
  return { cart: state.cart };
})(CartInvite);
