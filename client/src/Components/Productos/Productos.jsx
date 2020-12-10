import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

import { getProduct } from '../../store/Actions/Product_Actions'

const Productos = () => {

  const state = useSelector( (state) => state)
  const dispatch = useDispatch();
  const allProducts = state.products;
  console.log(allProducts);

  useEffect(()=>{
    dispatch(getProduct())
  }, [])
  return ( 
    <div>
      <ul>
        { allProducts.map((producto, index) =>{
          return <li key={index}>{producto.name}</li>
        })}
      </ul>
    </div>
   );
}
 
export default Productos;