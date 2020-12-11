import React from 'react';

const Producto = ({name, description, price, stock, img }) => {
  
  
  
  return ( 
    <div>
      <img src="" alt="No se encontro imagen del producto"/>
      <div>
        <h2>{name}</h2>
        <p>{price}</p>
        <br/>
        <p>{description}</p>
        <br/>
        <p>Espacio para reviews</p>
        <button>Add to cart</button>
      </div>
    </div>
   );
}
 
export default Producto;