import axios from "axios";
import ProductName from "./ProductName/ProductName";
import React, { useEffect, useState } from "react";
import ProductImage from "./ProductImage/ProductImage";
import ProductSpecs from "./ProductSpecs/ProductSpecs";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState({});
  let { id } = match.params;
  useEffect(() => {
    getSpecificProduct(id);
  }, []);

  async function getSpecificProduct(id) {
    let response = await axios.get(`http://localhost:4000/products/${id}`);

    setProduct(response.data.data);
  }
  return (
    <div>
      <ProductImage img={product.img} />
      <ProductName name={product.name} />
      <ProductSpecs
        processor={product.processor}
        screen={product.screen}
        ram={product.ram}
        storage={product.storage}
        camara={product.camara}
        frontcamara={product.frontcamara}
        battery={product.battery}
        others={product.others}
        dimensions={product.dimensions}
      />
    </div>
  );
};

export default ProductDetails;
