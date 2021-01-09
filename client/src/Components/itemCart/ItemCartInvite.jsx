import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editCount, removeFromCart, upTotal, downTotal, } from "../../store/Actions/cartActions";
import "./ItemCartInvite.css";
import { UPDATE_COUNT } from "../../store/types";

const ItemCartInvite = ({ product }) => {
  const { id, stock, count, price } = product;
  const [acum, setAcum] = useState(count);
  const [totalItem, setTotalItem] = useState(price * acum);
  const [redux, setRedux] = useState(true)
  const dispatch = useDispatch();

  useEffect( ()=>{
    console.log(redux)
    if(redux){
      maximAcum();
    }else{
      reduzAcum();
    }
  }, [acum])

  function maximAcum(){
    dispatch(upTotal(price))
  }

  function reduzAcum(){
    dispatch(downTotal(price))
  }

  async function minAcum() {
    var change = parseInt(acum) - 1;
    if (change <= 0) {
      console.log("Valor erroneo");
    } else {
      setRedux(false);
      var total = product.price * change;
      await setAcum(change);
      setTotalItem(total);
      acumRedux(product, acum);
    }
  }

  function acumRedux(product) {
    dispatch(editCount(product, acum));
  }

  function removeCart(product) {
    dispatch(removeFromCart(product));
  }

  function maxAcum() {
    var change = parseInt(acum) + 1;
    if (change > stock) {
      console.log("no hay unidades disponibles ");
    } else {
      setRedux(true);
      var total = product.price * change;
      setAcum(change);
      setTotalItem(total);
      acumRedux(product, acum);
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
