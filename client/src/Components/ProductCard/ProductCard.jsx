import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ProductCard = ({ name, price, img }) => {
    return (
        <div className="d-flex">
            <img src="https://imagens.trocafone.com/images/phones/dt-iphone7-black-1.jpg"/>
            <div className="product-info">
                <h3>{name}</h3>
                <p>Insert stars!!</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default ProductCard;