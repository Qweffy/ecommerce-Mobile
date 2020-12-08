import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

import { getProduct } from '../../store/Actions/Product_Actions'

const Productos = () => {

  const state = useSelector( (state) => state)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProduct())
  }, [])

  console.log(state.categories)
  return ( 
    <div>Desde el componente de Productos</div>
   );
}
 
export default Productos;