import React, { useEffect, useState} from 'react';
import axios from "axios";
import { useSelector } from "react-redux";

const CountShoppings = () => {
  const user = useSelector((state) => state.auth.user);
  const [Orders, setOrders] = useState()

  const getUserOrders = async ()=>{
    let response = await axios.get(`http://localhost:4000/orders/user/${user.id}`)
    console.log(response);
    setOrders(response.data.data)
  }

  useEffect(()=>{
    getUserOrders();
  }, [])


  return ( 
    <div>
      <h1>Tus compras</h1>
      {Orders && Orders.map(order=>{
        return(
          <div>cada orden</div>
        )
      })}
    </div>
   );
}
 
export default CountShoppings;