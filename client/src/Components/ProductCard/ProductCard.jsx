import React, { useEffect } from "react";
import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart.jsx";
import { Link } from "react-router-dom";
import AddToCartInvite from "../AddToCart/AddToCartInvite";

const ProductCard = ({ product }) => {
    const { name, price, img, id, stock } = product;
    let btnDisabled = false;

    if (stock === 0) btnDisabled = true;

    return (
        <div className="product-card pb-2 pt-3 px-1">
            <Link to={`/products/${id}`}>
                <img src={img} alt="img not found" className="product-img" />
            </Link>
            <div className="product-info p-2 mt-4 d-flex justify-content-between">
                <div>
                    <Link to={`/products/${id}`}>
                        <p>{name}</p>
                    </Link>
                    <h5 className="product-price"><strong>${price}</strong></h5>
                </div>
                <div className="mx-1 my-0">
                    <AddToCart id={id} btnDisabled={btnDisabled}/>
                    <AddToCartInvite product={product} id={id} btnDisabled={btnDisabled} />  
                </div>
            </div>            
        </div>
    );
}

export default ProductCard;
