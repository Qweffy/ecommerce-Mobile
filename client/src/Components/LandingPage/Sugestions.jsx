import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard.jsx";

const Sugestions = () => {
const sugestions = useSelector(state => state.sugestions);
const [products, setProducts] = useState([]);

useEffect(() => {
  //trae las categorias apenas entra a la pagina
  console.log(sugestions);  //transformo el arreglo en numeros
  var result = sugestions.map(function (x) {
  return parseInt(x, 10);
});
  axios.post("http://localhost:4000/products/sugestions",{sugestion: result}).then((response) => {
    setProducts(response.data);
  });

}, []);



function prueba() {
  console.log(sugestions);
}

return (
  <div className="m-4">
    <div className="d-flex">
      <div className="m-5">
      </div>
      <div className="products-grid m-5">
        {products.map((product, index) => {
          return (
              <div key={index}>
                <ProductCard product={product} />
              </div>
          );
        })}
      </div>
    </div>
  </div>
);
};

export default Sugestions;
