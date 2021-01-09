import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Producto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faChartPie,
  faExpandArrowsAlt,
  faBatteryFull,
  faMicrochip,
  faExpandAlt,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import CreateReview from "../CRUDreview/CreateReview.jsx";

const Producto = ({ match }) => {
  // We get => id = :1
  let { id } = match.params;
  const [product, setProduct] = useState({
    name: "",
    description: "",
    processor: "",
    screen: "",
    ram: "",
    storage: "",
    camara: "",
    frontcamara: "",
    battery: "",
    dimensions: "",
    others: "",
    price: "",
    stock: "",
    img: "",
    colors: [],
  });

  useEffect(() => {
    getSpecificProduct(id);
  }, []);

  async function getSpecificProduct(id) {
    let response = await axios.get(`http://localhost:4000/products/${id}`);

    setProduct(response.data.data);
  }

  return (
    <div className="justify-content-center producto">
      <div className="product-content d-flex">
        <div className="info-top">
          <img src={product.img} alt="Img not found" />
        </div>
        <div className="product-info-stat">
          <div className="product-description">
            <h3 className="product-name pb-2">{product.name}</h3>
            <div className="product-specific">
              <div className="product-specific-ind d-flex">
                <FontAwesomeIcon icon={faCamera} />
                <div>
                  <p>{product.frontcamara}</p>
                  <p>cámara</p>
                </div>
              </div>
              <div className="product-specific-ind d-flex">
                <FontAwesomeIcon icon={faChartPie} />
                <div>
                  <p>{product.storage}</p>
                  <p>memoria interna</p>
                </div>
              </div>
              <div className="product-specific-ind d-flex">
                <FontAwesomeIcon icon={faExpandAlt} />
                <div>
                  <p>{product.screen}</p>
                  <p>tamaño de pantalla</p>
                </div>
              </div>
              <div className="product-specific-ind d-flex">
                <FontAwesomeIcon icon={faCamera} />
                <div>
                  <p>{product.camara}</p>
                  <p>cámara trasera</p>
                </div>
              </div>
              <div className="product-specific-ind d-flex">
                <FontAwesomeIcon icon={faBatteryFull} />
                <div>
                  <p>{product.battery}</p>
                  <p>Bateria</p>
                </div>
              </div>
              <div className="product-specific-ind d-flex">
                <FontAwesomeIcon icon={faMicrochip} />
                <div>
                  <p>{product.processor}</p>
                  <p>Procesador</p>
                </div>
              </div>
              <div className="product-specific-ind d-flex">
                <FontAwesomeIcon icon={faMicrochip} />
                <div>
                  <p>{product.ram}</p>
                  <p>Ram</p>
                </div>
              </div>
              <div className="product-specific-ind d-flex">
                <FontAwesomeIcon icon={faExpandArrowsAlt} />
                <div>
                  <p>{product.dimensions}</p>
                  <p>Dimensiones del Cel</p>
                </div>
              </div>
              <div className="product-specific-ind d-flex">
                <FontAwesomeIcon icon={faInfo} />
                <div>
                  <p>{product.others}</p>
                  <p>Otros</p>
                </div>
              </div>
            </div>
          </div>
          <div className="product-info-bot d-flex">
            <div className="cont">
              <h5>Colores disponibles:</h5>
              <div className="product-colors">
                {product.colors &&
                  product.colors.map((color) => {
                    return (
                      <div className="color">
                        <div className="d1">
                          <img
                            src={JSON.parse(color).text}
                            alt="img not found"
                            className="product-img"
                          />
                        </div>
                        <p>plateado</p>
                      </div>
                    );
                  })}
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
      </div>
      <CreateReview productId={match.params.id}/>
    </div>
  );
};

export default Producto;
