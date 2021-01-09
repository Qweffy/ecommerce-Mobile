import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function CreateCategory() {


  function postcategories() {
    axios
      .get("http://localhost:4000/test/", { headers: { authorization:localStorage.getItem('token') } })
      .then(function (response) {

      });
  }

  // el prevent default sirve para q no recargue la pagina con el primer post
  return (
    <div className="add-category-container">
      {/* <h3>Add new category</h3> */}
      <form onSubmit={postcategories}>

            <button type="submit" class="btn btn-primary my-4">
              Add category
            </button>

        
      </form>
    </div>
  );
}
