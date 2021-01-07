import React from "react";

const ProductSpecs = ({
  processor,
  screen,
  ram,
  storage,
  camara,
  frontcamara,
  battery,
  others,
  dimensions,
}) => {
  return (
    <div>
      <ul>
        <li>{processor}</li>
        <li>{screen}</li>
        <li>{ram}</li>
        <li>{storage}</li>
        <li>{camara}</li>
        <li>{frontcamara}</li>
        <li>{battery}</li>
        <li>{others}</li>
        <li>{dimensions}</li>
      </ul>
    </div>
  );
};

export default ProductSpecs;
