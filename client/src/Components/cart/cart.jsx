import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemCart from "../itemCart/ItemCart";
import axios from "axios";

import "./cart.css";

const Cart = () => {
  const user = useSelector((state) => state.Reducer.user);

  const [cart, setCart] = useState({
    id: 1,
    price: 0,
    products: [],
  });
  const [allTotal, setAllTotal] = useState(cart.price);
  const { products, id } = cart; //se trae los productos y el id de la orden

  useEffect(() => {
    getOrders();
  }, []);

  async function getOrders() {
    //trae los productos de la orden carrito
    let response = await axios.get(
      `http://localhost:4000/orders/cart/${user.id}`
    );
    setCart(response.data.data);
  }

  return (
    <div className=" container d-flex">
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
              {products.map((product, index) => {
                return (
                  <ItemCart
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

export default Cart;
