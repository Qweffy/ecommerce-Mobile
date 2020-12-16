import React from 'react';

const ItemCart = ({product}) => {
  return ( 
    <div>
      <img src={product.img} alt=""/>
      <h4> {product.name} </h4>
      <p>{product.price}</p>
    </div>
   );
}
 
export default ItemCart;