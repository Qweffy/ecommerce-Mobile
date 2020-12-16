import React, { useEffect, useState } from 'react';
import './AddToCart.css';
import axios from "axios";


const AddToCart = (props) => {

    function addToCart(id) {
        axios.post(`http://localhost:4000/order/cart`)
            .then(res => {
                axios.post(`http://localhost:4000/order/cart/${res.data}`, { idproduct: id })                
            })
            .then()
    }

    return (
        <button
            onClick={() => { addToCart(props.id) }}
            type="button"
            className="btn btn-primary">
            <i class="fas fa-shopping-cart"></i>
        </button>
    );
}

export default AddToCart;