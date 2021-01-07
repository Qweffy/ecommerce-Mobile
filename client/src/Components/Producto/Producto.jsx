import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Producto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faChartPie,
  faArrowsAlt
} from "@fortawesome/free-solid-svg-icons";
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
    <div className="d-flex justify-content-center producto">
      <div className="product-content d-flex">
        <img src={product.img} alt="Img not found" />
        <div className="product-info">
          <div className="product-description">
            <h3 className="product-name pb-2">{product.name}</h3>
            <div className="product-specific">
              <div className="product-specific-ind d-flex">
                <FontAwesomeIcon icon={faCamera} />
                <div>
                  <p >{product.description}</p>
                  <p >cámara trasera</p>
                </div>
              </div>
              <div className="product-specific-ind d-flex">
                <FontAwesomeIcon icon={faChartPie} />
                <div>
                  <p >128 gb</p>
                  <p >memoria interna</p>
                </div>
              </div>
              <div className="product-specific-ind d-flex">
                <FontAwesomeIcon icon={faArrowsAlt} />
                <div>
                  <p >6.5</p>
                  <p >tamaño de pantalla</p>
                </div>
              </div>
            </div>
          </div>
          <div className="product-info-bot d-flex">
            <div className='cont'>
              <h5>Colores disponibles:</h5>
              <div className="product-colors">
                <div className="color"> 
                  <div className='d1'></div> 
                  <p>plateado</p>
                </div>
                <div className="color"> 
                  <div className='d2'></div> 
                  <p>dorado</p>
                </div>
                <div className="color"> 
                  <div className='d3'></div> 
                  <p>dorado rosa</p>
                </div>
              </div>
            </div>
            <div className="product-price d-flex">
              <div className="price">
                <p>Precio final</p>
                <p>${product.price}</p>
              </div>
              <button> COMPRAR </button>
            </div>
          </div>
        </div>
        {/* <div className="product-buy px-3">
          <div className="product-price text-center border-bottom">
            <h2>
              <strong>${product.price}</strong>
            </h2>
          </div>
          <div className="product-stock pt-2">
              <h5>Units available: {product.stock}</h5>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default Producto;
