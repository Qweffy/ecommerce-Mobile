import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Producto = ({ match }) => {
  // We get => id = :1
  let {id} = match.params;
  id = id.substring(1);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getSpecificProduct(id);
  }, []);

  async function getSpecificProduct(id) {
    let response = await axios.get(`http://localhost:4000/products/${id}`);

    setProduct(response.data.data);
  }
  
  return ( 
    <div>
      <img src={product.img} alt="No se encontro imagen del producto"/>
      <div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <br/>
        <p>{product.description}</p>
        <br/>
        <p>Espacio para reviews</p>
        <button>Add to cart</button>
      </div>
    </div>
   );
}
 
export default Producto;