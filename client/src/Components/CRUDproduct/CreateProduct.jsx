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

const history = useHistory();
const dispatch = useDispatch()


function handleChange(e) {
  setProducts({
    ...products,
    [e.target.name]: e.target.value
  }
  );
};

function handlerSubmnit(e){
  /* axios.post('http://localhost:4000/products/', products).
  then(function (response) {}); */
  e.preventDefault()
  dispatch(createProduct(products))
  history.push('/showProducts')
}


// el prevent default sirve para q no recargue la pagina con el primer post
        return (

          <div>
            <h3>CREAR PRODUCTO</h3>
            <form onSubmit = {handlerSubmnit}>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Nombre:</label>
                    <div class="col-sm-10">
                    <input class="form-control" placeholder="Ingresar Nombre del Producto" onChange={(e)=>{handleChange(e)}} name="name" type="text" required />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" >Description:</label>
                    <div class="col-sm-10">
                    <input class="form-control" placeholder="Ingresar Descripcion del Producto" onChange={(e)=>{handleChange(e)}} name="description" type="text" required />
                </div>
                  </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" >Price:</label>
                    <div class="col-sm-10">
                    <input class="form-control" placeholder="Ingresar Precio del Producto"  onChange={(e)=>{handleChange(e)}} name="price" type="number" required/>
                </div>
                  </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" >Stock:</label>
                    <div class="col-sm-10">
                    <input class="form-control" placeholder="Ingresar Cantidad de Stock" onChange={(e)=>{handleChange(e)}} name="stock" type="number"required />
                </div>
                  </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" >Image:</label>
                    <div class="col-sm-10">
                    <input class="form-control" placeholder="Ingresar Nombre de la imagen" onChange={(e)=>{handleChange(e)}} name="img" type="text" required/>
                </div>
                  </div>

                <br/>

                <button type="submit" class="btn btn-primary mb-2">CREAR</button>

            </form>
            </div>
        );
    }
