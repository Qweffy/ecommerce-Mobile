import React from "react";
import { useSelector } from "react-redux";
import CartInvite from "./cartInvite.jsx"
import Cart from "./cart.jsx"




const Combinedcart = (props) => {
  const { user } = useSelector((state) => state.auth);


   if (user===undefined){
  return (
    <CartInvite/>
  );}
  if (user!==undefined){
 return (
   <Cart/>
 );}


};

export default Combinedcart;
