import React, { useEffect } from 'react';
import './ProductCard.css';

const ProductCard = ({product}) => {
    const { name, price, img } = product;

    return (
        <div className="d-flex">
            <img src={img} alt="img not found" className="product-img"/>
            <div className="product-info">
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default ProductCard;