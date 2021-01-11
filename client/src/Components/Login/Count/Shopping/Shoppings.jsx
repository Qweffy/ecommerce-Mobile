import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import './Shopping.css'

const CountShoppings = () => {
  const user = useSelector((state) => state.auth.user);
  const [Orders, setOrders] = useState()

  const getUserOrders = async ()=>{
    let response = await axios.get(`http://localhost:4000/orders/user/${user.id}`);
    setOrders(response.data.data);
  }

  useEffect(()=>{
    getUserOrders();
  }, [])


  return ( 
    <div className='conten-order'>
      <h1>Tus compras</h1>
      <div className='all-orders-us'>
        {Orders && Orders.map(order=>{
          let date = order.createdAt.slice(0, -15)
          return(
            <div key={order.id} className='individual-order'>
              <div className='order-top'>
                <h5>Creada el {date}</h5>
                <button> Volver a comprar </button>
              </div>
              <div className="order-bot">
                {order.products.length > 0 ? 
                  <div className='last-product'>
                    <img src={order.products[0].img} alt="Img not found" />
                    <div>
                      <h5>{order.products[0].name}</h5>
                      <p>{order.products[0].price} * { order.products[0].order_line.count } Unidad </p>
                    </div>
                  </div> 
                :null} 
                <div>
                  <button>Ver detalles de la compra</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
   );
}
 
export default CountShoppings;