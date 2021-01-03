import React, { useEffect } from 'react';
import './ProductCard.css';
import AddToCart from "../AddToCart/AddToCart.jsx";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { name, price, img, id, stock } = product;
    let btnDisabled = false;

    if (stock === 0) btnDisabled = true;

    if (btnDisabled) {
        return (
            <div className="product-card pb-2 pt-3 px-1">
                <Link to={`/products/${id}`}>
                <img src={img} alt="img not found" className="product-img" />
                <div className="product-info p-2 mt-4">
                    <p>{name}</p>
                    <h5 className="product-price"><strong>${price}</strong></h5>
                    {/* <p>Producto temporalmente fuera de stock</p> */}
                </div>
                </Link>
                <div className="m-5">
                    <AddToCart id={id} btnDisabled={btnDisabled}/>
                </div>
            </div>
        );
    }

    return (
        <div className="product-card pb-2 pt-3 px-1">
            <Link to={`/products/${id}`}>
            <img src={img} alt="img not found" className="product-img" />
            <div className="product-info p-2 mt-4 d-flex justify-content-between">
                <div>
                    <p>{name}</p>
                    <h5 className="product-price"><strong>${price}</strong></h5>
                </div>
                <div className="mx-1 my-0">

                </div>
            </div>
            </Link>

            <AddToCart id={id} btnDisabled={btnDisabled}/>
        </div>
    );
}

export default ProductCard;
