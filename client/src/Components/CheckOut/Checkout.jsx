import React from 'react';

const Checkout = () => {
  return ( 
    <form>
      <h2>Datos de envio</h2>
      <p>Idica la ciudad y la direccion donde resiviras los productos</p>

      <label htmlFor="city">Ciudad</label>
      <input id='city' type="text" placeholder='Ingrese la ciudad'/>

      <label htmlFor="Dir">Direccion</label>
      <input id='Dir' type="text" placeholder='Ingrese la direccion'/>

      <label htmlFor="phone">Ciudad</label>
      <input id='phone' type="text" placeholder='Ingrese la ciudad'/>

      <label htmlFor="codeP">Ciudad</label>
      <input id='codeP' type="text" placeholder='Ingrese la ciudad'/>

      <div className="contBut">
        <input type="submit" value='Continuar'/>
        <input type="submit" value='Rechazar'/>
      </div>
    </form>
   );
}
 
export default Checkout;