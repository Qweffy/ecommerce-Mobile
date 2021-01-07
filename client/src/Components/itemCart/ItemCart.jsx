import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import "./ItemCart.css";

const ItemCart = ({ product, idorder, setCart, modAllTotal }) => {
  const { id, order_line, stock } = product;
  const [acum, setAcum] = useState(order_line.count);
  const [totalItem, setTotalItem] = useState(product.price * order_line.count);
  const user = useSelector((state) => state.Reducer.user);
  console.log(product,"chau");
  useEffect(() => {
    if (!isNaN(acum)) {
      axios
        .put(`http://localhost:4000/users/${user.id}/cart`, {
          id: id,
          acum: acum,
        })
        .then((res) => {
          console.log(res.data.order,"orden")
          modAllTotal((total) => res.data.order.price);
        /*   setCart(res.data.order); */
        });
    }
  }, [acum]);

  function deleteProduct() {
    axios
      .delete(`http://localhost:4000/orders/cart/${idorder}/${id}`)
      .then((res) => {
        setCart(res.data.order);
      });
  }

  function decAcum() {
    var newAcum = acum - 1;
    if (newAcum <= 0) {
      console.log("Valor erroneo");
    } else {
      /* var total = product.price * change; */
      setAcum(newAcum);
      setTotalItem(product.price * newAcum);
      modAllTotal((total) => total - product.price);
    };
  }

  function incAcum() {
    var newAcum = acum + 1;
    if (newAcum > product.stock) {
      console.log("no hay unidades disponibles ");
    } else {
      /* var total = product.price * newAcum; */
      setAcum(newAcum);
      setTotalItem(product.price * newAcum);
      modAllTotal((total) => total + product.price);
    }
  }

  function onChange(e) {
    var change = parseInt(e.target.value);
    if (change > product.stock || change < 1) {
      console.log("no hay unidades disponibles ");
    } else {
      var total = product.price * change;
      setAcum(change);
      setTotalItem(total);
    }
  }

  return (
    <tr className="product">
      <td className=" d-flex product">
        <img src={product.img} alt="" />
        <div className="d-flex text-gen name-product">
          <p>{product.name}</p>
        </div>
      </td>
      <td className="text-gen">
        <p>$ {product.price}</p>
      </td>
      <td className="text-gen">
        <button className="less-cart" onClick={decAcum}>
          -
        </button>
        <input
          className="acum"
          onChange={onChange}
          type="number"
          value={acum}
        />
        <button className="more-cart" onClick={incAcum}>
          +
        </button>
      </td>
      <td className="text-gen">{stock}</td>
      <td className="text-gen">$ {isNaN(totalItem) ? 0 : totalItem}</td>
      <td>
        <button
          onClick={deleteProduct}
          type="button"
          className="btn btn-danger"
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default ItemCart;
