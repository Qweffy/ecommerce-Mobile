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
import Background from "../LandingPage/Twirl__2.mp4";
import { Container, Row, Col, Button } from "react-bootstrap";
const ProductCard = ({ product }) => {
    const { name, price, img, id, stock, ram, storage, camara } = product;
    let btnDisabled = false;

    if (stock === 0) btnDisabled = true;

    return (
        <div className="card">
            <div className="flex">
                <div className='img'>
                    <img src={img} alt="Img not found" />
                </div>
                <div className="">
                    <h3 className="">{name}</h3>
                    <div className="">
                        <div className="">
                            <FontAwesomeIcon icon={faChartPie} />
                            <div>
                                <p >{storage}</p>
                                <p >memoria interna</p>
                            </div>
                        </div>
                        <div className="">
                            <FontAwesomeIcon icon={faCamera} />
                            <div>
                                <p >{camara}</p>
                                <p >cámara trasera</p>
                            </div>
                        </div>
                        <div className="">
                            <FontAwesomeIcon icon={faMicrochip} />
                            <div>
                                <p >{ram}</p>
                                <p >Ram</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
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
    );
}

export default ProductCard;
