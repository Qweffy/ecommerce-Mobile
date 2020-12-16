import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Producto.css";
import AddToCart from "../AddToCart/AddToCart.jsx";

const Producto = ({ match }) => {
  // We get => id = :1
  let { id } = match.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    getSpecificProduct(id);
  }, []);

  async function getSpecificProduct(id) {
    let response = await axios.get(`http://localhost:4000/products/${id}`);

    setProduct(response.data.data);
  }

  return (
    <div className="d-flex m-5 justify-content-center">
      <img src={product.img} alt="Img not found" />
      <div className="product-description m-5 mt-0 p-4">
        <h3 className="product-name pb-2">{product.name}</h3>
        <p className="pt-2">{product.description}</p>
        <div className="product-stock pt-2">
          <h5>Units available: {product.stock}</h5>
        </div>
      </div>
      <div className="product-buy px-3">
        <div className="product-price text-center border-bottom">
          <h2>
            <strong>${product.price}</strong>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Producto;
