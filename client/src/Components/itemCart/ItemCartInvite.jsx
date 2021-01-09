import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editCount, removeFromCart, upTotal, downTotal, } from "../../store/Actions/cartActions";
import "./ItemCartInvite.css";
import { UPDATE_COUNT } from "../../store/types";

const ItemCartInvite = ({ product }) => {
  const { stock, count, price } = product;
  const [acum, setAcum] = useState(count);
  const [totalItem, setTotalItem] = useState(price * acum);
  const dispatch = useDispatch();


  async function minAcum() {
    var change = parseInt(acum) - 1;
    if (change <= 0) {
      console.log("Valor erroneo");
    } else {
      var total = product.price * change;
      setAcum(change);
      setTotalItem(total);
      dispatch(editCount(product, change));
    }
  }

  function maxAcum() {
    var change = parseInt(acum) + 1;
    if (change > stock) {
      console.log("no hay unidades disponibles ");
    } else {
      var total = product.price * change;
      setAcum(change);
      setTotalItem(total);
      dispatch(editCount(product, change));
    }
  }

  function removeCart(product) {
    dispatch(removeFromCart(product));
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
      <td className="text-gen div-acum">
        <button className="less-cart" onClick={minAcum}>
          -
        </button>
        <input
          className="acum"
          onChange={onChange}
          type="number"
          value={acum}
        />
        <button className="more-cart" onClick={maxAcum}>
          +
        </button>
      </td>
      <td className="text-gen">{stock}</td>
      <td className="text-gen"> ${isNaN(totalItem) ? 0 : totalItem}</td>
      <td>
        <button
          onClick={() => removeCart(product)}
          type="button"
          className="btn btn-danger"
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default ItemCartInvite;
