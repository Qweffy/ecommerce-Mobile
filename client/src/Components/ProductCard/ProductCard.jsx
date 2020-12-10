import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ProductCard = ({ name, price, img }) => {
    return (
        <div className="d-flex">
            <img src="" alt="Img not found"/>
            <div className="product-info">
                <h3>{name}</h3>
                <p>Insert stars!!</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default ProductCard;