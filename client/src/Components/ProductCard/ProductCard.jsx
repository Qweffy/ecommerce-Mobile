import React, { useEffect } from 'react';
import './ProductCard.css';

const ProductCard = ({product}) => {
    const { name, price, img } = product;

    return (
        <div className="product-card pb-2 pt-3 px-1">
            <img src={img} alt="img not found" className="product-img"/>
            <div className="product-info p-2 mt-4">
                <p>{name}</p>
                <h5 className="product-price"><strong>${price}</strong></h5>
            </div>
        </div>
    );
}

export default ProductCard;