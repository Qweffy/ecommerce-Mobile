import React from 'react'; 

const Cart = () => {
  return ( 
    <div>
      <div> 
        <h3>Shopping Cart</h3>
        <div>
          {/* Cada podructo para comprar */}
        </div>
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