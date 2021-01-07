import React, { useEffect } from "react";
import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart.jsx";
import { Link } from "react-router-dom";
import AddToCartInvite from "../AddToCart/AddToCartInvite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faChartPie,
    faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
    const { name, price, img, id, stock, ram, storage, camara } = product;
    let btnDisabled = false;

    if (stock === 0) btnDisabled = true;

    return (
        <div className="product-card">
            <div className="product-content d-flex">
                <div className='info-top'>
                    <img src={img} alt="Img not found" />
                </div>
                <div className="product-info">
                    <div className="product-description">
                        <h3 className="product-name pb-2">{name}</h3>
                        <div className="product-specific">
                            <div className="product-specific-ind d-flex">
                                <FontAwesomeIcon icon={faChartPie} />
                                <div>
                                    <p >{storage}</p>
                                    <p >memoria interna</p>
                                </div>
                            </div>
                            <div className="product-specific-ind d-flex">
                                <FontAwesomeIcon icon={faCamera} />
                                <div>
                                    <p >{camara}</p>
                                    <p >cámara trasera</p>
                                </div>
                            </div>
                            <div className="product-specific-ind d-flex">
                                <FontAwesomeIcon icon={faMicrochip} />
                                <div>
                                    <p >{ram}</p>
                                    <p >Ram</p>
                                </div>
                            </div>
                            <div className="product-price d-flex">
                                <div className="price">
                                    <p>Precio final</p>
                                    <p>${price}</p>
                                </div>
                                <Link to={`/products/${id}`}>
                                    <button> Ver más </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
