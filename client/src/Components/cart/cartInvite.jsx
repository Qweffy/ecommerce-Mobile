import React, { useEffect, useState } from "react";
import ItemCart from "../itemCart/ItemCart";
import { connect, useSelector, useDispatch } from "react-redux";
import "./cartInvite.css";
import ItemCartInvite from "../itemCart/ItemCartInvite";

const CartInvite = (props) => {
  const [cart, setCart] = useState(props["cart"]["cartItems"]);
  const [allTotal, setAllTotal] = useState(cart.price);
  const { id } = cart; //se trae los productos y el id de la orden
  const cartState = useSelector((state) => state.cart);

  // const user = useSelector(state => state.user);

  // const [cart, setCart] = useState({
  //   id: 1,
  //   price: 0,
  //   products: [],
  // });
  // const [allTotal, setAllTotal] = useState(cart.price);
  // const { products, id } = cart; //se trae los productos y el id de la orden

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
              {cartState.cartItems.map((product, index) => {
                return (
                  <ItemCartInvite
                    key={index}
                    setCart={setCart}
                    allTotal={allTotal}
                    setAllTotal={setAllTotal}
                    product={product}
                    idorder={id}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <div>
            <p>Subtotal: {allTotal}</p>
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
