import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import './CreateProduct.css';

import { createProduct } from "../../store/Actions/Product_Actions";

export default function CreateProduct() {
  const [products, setProducts] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    img: "",
  });
  const [categories, setcategory] = useState([]);
  const [sugestions, setSugestions] = useState([]);
  const [selectedcategories, setcateselect] = useState([]);
  const [selectedsugestions, setsugeselect] = useState([]);


  const history = useHistory();
  const dispatch = useDispatch();

  function rendercategories(cat) {
    return (
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          name={cat.id}
          onChange={(e) => {
            loadcategory(e);
          }}
        />
        <label class="form-check-label" for="gridCheck1">
          {cat.name}
        </label>
      </div>
    );
  }

  function rendersugestions(cat) {
    return (
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          name={cat.id}
          onChange={(e) => {
            loadsugestion(e);
          }}
        />
        <label class="form-check-label" for="gridCheck1">
          {cat.name}
        </label>
      </div>
    );
  }


  function loadcategory(e) {
    //esta funcion agrega a un arreglo de las categorias seleccionadas
    console.log(e.target.checked); //detecta en que estado el checkbox , si esta true agregamos la categorias
    //si esta false quitamos la categoria

    if (e.target.checked === true) {
      setcateselect([...selectedcategories, e.target.name]);
    }

    if (e.target.checked === false) {
      setcateselect(selectedcategories.filter((c) => c !== e.target.name));
    }
  }

  function loadsugestion(e) {
    //esta funcion agrega a un arreglo de las categorias seleccionadas
    console.log(e.target.checked); //detecta en que estado el checkbox , si esta true agregamos la categorias
    //si esta false quitamos la categoria

    if (e.target.checked === true) {
      setsugeselect([...selectedsugestions, e.target.name]);
    }

    if (e.target.checked === false) {
      setsugeselect(selectedsugestions.filter((c) => c !== e.target.name));
    }
  }

  function handleChange(e) {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  }


  function handlerSubmnit(e){
    e.preventDefault();
    axios.post('http://localhost:4000/products/', products).
    then(function (response) {
      selectedcategories.map(cat => {  // response trae la respuesta de la peticion, q devuelve la respuesta del back
        // entonces pudimos traer el id del producto que acabamos de crear y asi cargarle las categorias
        axios.post(`http://localhost:4000/products/${response.data.id}/category/${cat}`).
        then(function (response) {});  //esto se asegura que se postee todo antes de recargar la pagina
      }
    );
    selectedsugestions.map(sug => {  //por cada sugestion cargado lo asocia al producto
      axios.post(`http://localhost:4000/products/${response.data.id}/sugestion/${sug}`).
      then(function (response) {});  //esto se asegura que se postee todo antes de recargar la pagina
    }

  );
    history.push("/showProducts");})
  }

  useEffect(() => {
    //trae las categorias apenas entra a la pagina
    axios.get("http://localhost:4000/category/").then((response) => {
      setcategory(response.data);
    });
    axios.get("http://localhost:4000/sugestions/").then((response) => {
      setSugestions(response.data);
    });
  }, []);

  // el prevent default sirve para q no recargue la pagina con el primer post
  return (
    <div className="add-product-container">
      {/* <h3>Add new product</h3> */}
      <form onSubmit={handlerSubmnit} className="mx-5 my-4">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Product name</label>
          <div className="col-sm-10">
            <input
              className="form-control m-1"
              placeholder="Insert product name"
              onChange={(e) => {
                handleChange(e);
              }}
              name="name"
              type="text"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <input
              className="form-control m-1"
              placeholder="Insert product description"
              onChange={(e) => {
                handleChange(e);
              }}
              name="description"
              type="text"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-10">
            <input
              className="form-control m-1"
              placeholder="Insert product price"
              onChange={(e) => {
                handleChange(e);
              }}
              name="price"
              type="number"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Available units</label>
          <div className="col-sm-10">
            <input
              className="form-control m-1"
              placeholder="Insert available units"
              onChange={(e) => {
                handleChange(e);
              }}
              name="stock"
              type="number"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Image URL</label>
          <div className="col-sm-10">
            <input
              className="form-control m-1"
              placeholder="Insert image URL"
              onChange={(e) => {
                handleChange(e);
              }}
              name="img"
              type="text"
              required
            />
          </div>
        </div>
        <div className="form-group row">
        <hr />
          <label className="col-sm-2 col-form-label">Product categories</label>
          <div className="col-sm-10">
            <div className="m-1">
                {categories.map((cat) => rendercategories(cat))}
            </div>
          </div>
          <hr />
          <label className="col-sm-2 col-form-label">Sugestions Categories</label>
          <div className="col-sm-10">
            <div className="m-1">
                {sugestions.map((cat) => rendersugestions(cat))}
            </div>
          </div>
        </div>
        <button type="submit" className="add-product-btn btn btn-primary my-4">
          Add product
        </button>
      </form>
    </div>
  );
}
