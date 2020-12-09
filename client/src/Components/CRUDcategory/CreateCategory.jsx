import React, { useState } from "react";
import axios from "axios";

export default function CreateCategory() {
  const [category, setCategory] = useState({});

  function handleChange(e) {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  }

  function postproducts() {
    axios
      .post("http://localhost:4000/category/", category)
      .then(function (response) {});
  }

  // el prevent default sirve para q no recargue la pagina con el primer post
  return (
    <div>
      <h3>CREAR PRODUCTO</h3>
      <form
        onSubmit={(e) => {
          postproducts();
        }}
      >
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10">
            <input
              class="form-control"
              placeholder="Ingresar Nombre de la categoria"
              onChange={(e) => {
                handleChange(e);
              }}
              name="name"
              type="text"
              required
            />
          </div>
        </div>
        <br />
        <button type="submit" class="btn btn-primary mb-2">
          CREAR CATEGORIA
        </button>
      </form>
    </div>
  );
}
