import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartInvite from "./cartInvite.jsx"
import Cart from "./cart.jsx"
const Combinedcart = (props) => {
  const { user } = useSelector((state) => state.auth);


   if (user===undefined){
  return (
    <div>
    <CartInvite/>
    </div>
  );}
  if (user!==undefined){
 return (
   <div>
   <Cart/>
   </div>
 );}


};

export default Combinedcart;
