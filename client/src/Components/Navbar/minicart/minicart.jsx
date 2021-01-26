import React, { useState } from "react";
import {
   NavDropdown, 
   Dropdown, 
   Button, 
   DropdownButton  
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { editCount, removeFromCart, upTotal, downTotal, } from "../../../store/Actions/cartActions";
import "./miniCart.css";

const MiniCart = () => {

  const {cartItems} = useSelector(state => state.cart);
  const [acum, setAcum] = useState(1);
  const dispatch = useDispatch();

  console.log(cartItems);


  function onChange(e, id) {
    console.log(id)
    var change = parseInt(e.target.value);
    cartItems.forEach(product =>{
      console.log(product[0])
      if (change > product.stock || change < 1) {
        console.log("no hay unidades disponibles ");
      } else {
        setAcum(change);
        dispatch(editCount(product, change));
      }
    })
  }

  return ( 
    <DropdownButton
      menuAlign="left"
      title="Dropdown left"
      id="dropdown-menu-align-left"
    >
      {cartItems && cartItems.map((product, index) => {
        return <div className='mini-show-cart' key={index} product={product}>
                  <img src={product.img} alt=""/>
                  <div className='show-left-drop'>
                    <h5>{product.name}</h5>
                    <h5>${product.price}</h5>
                  </div>
                  <div className='show-rigth-drop'>
                    <button
                      //onClick={() => removeCart(product)}
                      type="button"
                      className="btn btn-danger"
                    >
                      <i className="far fa-trash-alt"></i>
                    </button>
                    <input
                      className="acum"
                      onChange={(e) => onChange(e, product.id)}
                      type="number"
                      value={product.count}
                    />
                  </div>
              </div>;
      })}
      <Dropdown.Divider />
      <Dropdown.Item className='next-show-minicart' eventKey="4">Continua con tu compra</Dropdown.Item>
    </DropdownButton>
   );
}
 
export default MiniCart;