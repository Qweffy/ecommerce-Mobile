import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { createProduct } from '../../store/Actions/Product_Actions'



export default function CreateProduct(){
const [products, setProducts] = useState({
  name: '',
  description: '',
  price: '',
  stock: '',
  img: ''
});
const [categories , setcategory] = useState([]);
const [selectedcategories , setcateselect] = useState([]);

const history = useHistory();
const dispatch = useDispatch();

function rendercategories(cat){
return <div class="form-check">
<input class="form-check-input" type="checkbox" name={cat.id} onChange={(e)=>{loadcategory(e)}} />
<label class="form-check-label" for="gridCheck1">{cat.name}</label>
</div>
}

function loadcategory(e) {//esta funcion agrega a un arreglo de las categorias seleccionadas
console.log(e.target.checked); //detecta en que estado el checkbox , si esta true agregamos la categorias
                                //si esta false quitamos la categoria

if(e.target.checked === true){
setcateselect([...selectedcategories,e.target.name]);
}

if(e.target.checked === false){
setcateselect(selectedcategories.filter(c =>  c !== e.target.name ));
}

}

function handleChange(e) {
  setProducts({
    ...products,
    [e.target.name]: e.target.value
  }
  );
};

function handlerSubmnit(e){
  e.preventDefault()
  axios.post('http://localhost:4000/products/', products).
  then(function (response) {
   selectedcategories.map(cat => {
     axios.post(`http://localhost:4000/products/${response.data.data.id}/category/${cat}`).
       then(function (response) {window.location.reload(false)});
   })
  });
  history.push('/showProducts')

}

useEffect(() => {   //trae las categorias apenas entra a la pagina
      axios.get("http://localhost:4000/category/").then((response) => {
        setcategory(response.data);

      });
    }, []);

  // el prevent default sirve para q no recargue la pagina con el primer post
  return (
    <div>
      <h3>CREAR PRODUCTO</h3>
      <form
        onSubmit={handlerSubmnit}
      >
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Nombre:</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              placeholder="Ingresar Nombre del Producto"
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
          <label className="col-sm-2 col-form-label">Description:</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              placeholder="Ingresar Descripcion del Producto"
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
          <label className="col-sm-2 col-form-label">Price:</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              placeholder="Ingresar Precio del Producto"
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
          <label className="col-sm-2 col-form-label">Stock:</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              placeholder="Ingresar Cantidad de Stock"
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
          <label className="col-sm-2 col-form-label">Image:</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              placeholder="Ingresar Nombre de la imagen"
              onChange={(e) => {
                handleChange(e);
              }}
              name="img"
              type="text"
              required
            />
          </div>
        </div>
        <div>
             <div class="col-sm-15"><h5>Categorias:</h5></div>
             {categories.map(cat => rendercategories(cat) )}
        </div>

        <br />

        <button type="submit" className="btn btn-primary mb-2">
          CREAR
        </button>
      </form>
    </div>
  );
}
