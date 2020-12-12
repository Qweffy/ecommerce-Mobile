import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Producto.css";

const Producto = ({ match }) => {
  // We get => id = :1
  let { id } = match.params;
  console.log(id);
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
        <h2 className="product-name pb-2">{product.name}</h2>
        <p className="pt-2">{product.description}</p>
        <div className="product-stock pt-2">
          <h4>Unidades disponibles: {product.stock}</h4>
        </div>
      </div>
      <div className="product-buy px-3">
        <div className="product-price text-center border-bottom">
          <h1>
            <strong>$ {product.price}</strong>
          </h1>
        </div>
        <button className="buy-btn p-2">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Producto;
