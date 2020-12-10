import React, { useEffect } from 'react';
import './ProductCard.css';

const ProductCard = ({product}) => {
    const { name, price, img } = product;

    return (
        <div className="d-flex border rounded p-2">
            <img src={img} alt="img not found" className="product-img"/>
            <div className="product-info p-2">
                <h5>{name}</h5>
                <p>${price}</p>
            </div>
        </div>
    );
}

export default ProductCard;