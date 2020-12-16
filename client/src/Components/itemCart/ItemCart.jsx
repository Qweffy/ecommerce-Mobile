import React from 'react';
import axios from "axios";

const ItemCart = ({product , idorder}) => {


function deleteProduct(idorder){
axios.delete(`http://localhost:4000/orders/cart/${idorder}/${product.id}`).then((res)=>{});
}





  return (
    <div>
      <img src={product.img} alt=""/>
      <h4> {product.name} </h4>
      <p>{product.price}</p>
      <button
        onClick={() => deleteProduct(idorder)}
        type="button"
        className="btn btn-danger"
      >
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
   );
}

export default ItemCart;
