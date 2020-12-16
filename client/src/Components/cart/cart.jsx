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

  async function getOrders() {
    let response = await axios.get(`http://localhost:4000/order/cart`);
     setCart(response.data.data); 
  }

  const { products } = cart

  return ( 
    <div className='d-flex'>
      <div> 
        <h3>Shopping Cart</h3>
        <hr/>
        <div>
          {
            products.map((product, index) =>{
              return(
                <ItemCart key={index} product={product}/>
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