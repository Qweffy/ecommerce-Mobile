import React, { useEffect, useState } from 'react';
import ItemCart from '../itemCart/ItemCart'
import axios from "axios";

const Cart = () => {
  const [ cart, setCart ] = useState({
  id: 1,
  price: 0,
  products: []
  })

  useEffect((()=>{
    getOrders();
  }), []);

  async function getOrders() {  //trae los productos de la orden carrito
    let response = await axios.get(`http://localhost:4000/order/cart`);
     setCart(response.data.data);
     console.log(response.data.data);
  }

  const { products , id} = cart  //se trae los productos y el id de la orden

  return (
    <div className='d-flex'>
      <div>
        <h3>Shopping Cart</h3>
        <hr/>
        <div>
          {
            products.map((product, index) =>{
              return(
                <ItemCart key={index} product={product} idorder={id}/>
               )
            })
          }
        </div>
        <hr/>
        <div>
          <button> Next </button>
          <button> Cancel </button>
        </div>
      </div>
      <div>
        <h3>Summary</h3>
        <div>
          {/* Descripcion de cada producto comprado */}
        </div>
        <h3> Total: </h3>
      </div>
    </div>
   );
}

export default Cart;
