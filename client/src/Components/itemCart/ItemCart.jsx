import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from "axios";

import './ItemCart.css';

const ItemCart = ({ product , idorder}) => {
  const { id, order_line, stock  }=product
  const [ acum, setAcum ]=useState(order_line.count);
  const [ totalItem, setTotalItem ]= useState(order_line.price)
  const user = useSelector(state => state.user);
  useEffect(()=>{
    if(!isNaN(acum)){
      axios.put(`http://localhost:4000/users/${user.id}/cart`, { id: id, acum: acum })
      .then(orden => {
        //console.log(orden)
      });
    }
  },[acum])

function deleteProduct(idorder){
  axios.delete(`http://localhost:4000/orders/cart/${idorder}/${id}`)
        .then((res)=>{});
}

function minAcum(){
  var change =  parseInt(acum)  - 1;
  if(change <= 0){
    console.log('Valor erroneo');
  }
  else{
    var total = product.price * change;
    setAcum(change);
    setTotalItem(total);
  };
}

function maxAcum(){
  var change = parseInt(acum) + 1;
  if( change > product.stock){
    console.log('no hay unidades disponibles ');
  }
  else{
    var total = product.price * change;
    setAcum( change );
    setTotalItem(total );
  };
}

function onChange(e){
  var change = parseInt(e.target.value)
  if( change > product.stock){
    console.log('no hay unidades disponibles ');
  }
  else{setAcum( change )};
} 

  return (
    <tr className="product">
      <td className=" d-flex product">
        <img src={product.img} alt=""/>
        <div className="d-flex text-gen name-product" ><p>{product.name}</p></div>
      </td>
      <td className="text-gen">
        <p>$ {product.price}</p>
      </td>
      <td className="text-gen">
        <button className="less-cart" onClick={minAcum}>-</button>
        <input className="acum" onChange={onChange} type="number" value={acum}/>
        <button className="more-cart" onClick={maxAcum}>+</button>
      </td>
      <td className="text-gen">{stock}</td>
      <td className="text-gen">$ {totalItem}</td>
      <td>
        <button
          onClick={() => deleteProduct(idorder)}
          type="button"
          className="btn btn-danger"
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </td>
      
    </tr>
   );
}

export default ItemCart;
